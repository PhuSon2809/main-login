import { Transition } from '@headlessui/react'
import { subDays } from 'date-fns'
import { useEffect, useState } from 'react'

import { LoadingScreen } from './components/loading'
import Login from './components/login'
import useRouteElements from './hooks/useRouteElements'

function App() {
  const routeElements = useRouteElements()

  const [isSginIn, setIsSignIn] = useState<boolean>(false)
  const [loadingSdk, setLoadingSdk] = useState(false)

  useEffect(() => {
    const start = subDays(new Date(), 0)
    console.log('tes', start)

    window.finSdk.init({
      onProgress: (percent: any) => {
        console.log('onProgress', percent)
      },
      onFinish: async () => {
        console.log('Finished')
        setLoadingSdk(true)
      },
      onError: (id: any) => {
        console.log('onError', id)
      }
    })
  }, [])

  useEffect(() => {
    const openLogin = setTimeout(() => {
      setIsSignIn(true)
    }, 5 * 1000)

    return () => clearTimeout(openLogin)
  }, [])

  return (
    <>
      <Transition
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        show={loadingSdk}
      >
        <div className='absolute z-10 top-0 bottom-0 left-0 right-0'>
          <LoadingScreen />
        </div>
      </Transition>

      {routeElements}
      {isSginIn && <Login isOpen={isSginIn} onClose={() => setIsSignIn(false)} />}
    </>
  )
}

export default App
