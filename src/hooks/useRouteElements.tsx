import { useRoutes } from 'react-router-dom'

import { PATH_PUBLIC_APP } from '~/constants/paths'
import { MainLayout } from '~/layouts/mainLayout'
import Landing from '~/pages/landing/Landing'

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: PATH_PUBLIC_APP.home,
      index: true,
      element: (
        <MainLayout>
          <Landing />
        </MainLayout>
      )
    }
  ])

  return routeElements
}

export default useRouteElements
