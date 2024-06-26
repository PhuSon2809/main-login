import isUndefined from 'lodash/isUndefined'
import omitBy from 'lodash/omitBy'
//
import useQueryParams from '~/hooks/useQueryParams'
import { ListConfig } from '~/@types/common'

export type QueryConfig = {
  [key in keyof ListConfig]: string
}

function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams()

  const queryConfig: QueryConfig = omitBy(
    {
      checkoutShare: queryParams.checkoutShare,
      sender: queryParams.sender,
      checkoutType: queryParams.checkoutType,
      resale: queryParams.resale,
      viewType: queryParams.viewType,
      shareSingleProduct: queryParams.shareSingleProduct,
      productResale: queryParams.productResale,
      cartShareType: queryParams.cartShareType,
      itemCheckoutIds: queryParams.itemCheckoutIds,
      quantityCheckoutIds: queryParams.quantityCheckoutIds,
      itemsPerPage: queryParams.itemsPerPage || '5',
      currentPage: queryParams.currentPage || '1'
    },
    isUndefined
  )
  return queryConfig
}

export default useQueryConfig
