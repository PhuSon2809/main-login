import { sendTransaction } from '~/utils/combineSdk'

export const useUpdateProductShare = () => {
  const onHandleUpdateProductShare = async () => {
    try {
      const res = await sendTransaction('updateProductShare', [])
      console.log('Update product share', res)
    } catch (error) {
      console.log('Update product share error:', error)
    }
  }
  return {
    onHandleUpdateProductShare
  }
}
