import { abiKventure, abiMasterpool, abiUsdt, abiV1 } from '~/constants/version/index'

// import usdt from '~/constants/usdt.json'

export const sendTransaction = async (
  functionName: string,
  dataInput: any,
  abiType: 'ecommerce' | 'usdt' = 'ecommerce'
) => {
  const { abiAddress, abi } = abiType === 'ecommerce' ? abiV1 : abiUsdt

  const generateInput = (functionName: string, dataInput: any) => {
    const objFunction = abi.find((item) => item.type === 'function' && item.name === functionName)
    if (!objFunction) return

    const inputs = objFunction.inputs

    return inputs.map((item: any) => {
      const { name, type } = item

      if (type.includes('tuple')) {
        const data = dataInput[name]
        const components = item?.components
        let res

        if (type === 'tuple[]') {
          res = data.map((dataItem: any) =>
            components.map((componentsItem: any) => ({
              ...componentsItem,
              value: dataItem[componentsItem.name]
            }))
          )
        } else {
          res = components.map((compItem: any) => ({
            ...compItem,
            value: data[compItem.name]
          }))
        }

        return res
      }

      return {
        ...item,
        value: dataInput[name]
      }
    })
  }

  const convertRelatedAddress = (ra: string[]) => {
    return ra.map((item) => ({ address: item }))
  }

  const inputArray = generateInput(functionName, dataInput)
  console.log('functionName', functionName)
  console.log('dataInput', dataInput)
  console.log('inputArray', inputArray)

  const data = {
    functionName,
    isCall: true,
    type: 'transaction',
    to: abiAddress,
    feeType: abiType === 'usdt' ? 'sc' : 'commissionSign',
    inputArray,
    amount: '0',
    gas: 5000000,
    abiData: abi,
    relatedAddress: convertRelatedAddress([abiUsdt.abiAddress, abiKventure.address, abiMasterpool.address])
  }
  console.log('send smartcontarct before', data)
  const res = await window.finSdk.sendTransaction(data)
  console.log('send smartcontarct after', res)

  if (!res.success) return console.log('success false')
  console.log('logsmartContractData 2', res)

  return res.data.data.returnValue
}

// export const sendTransactionUsdt = async (functionName: string, dataInput: any) => {
//   const generateInput = (functionName: string, dataInput: any) => {
//     const objFunction = usdt.find((item) => item.type === 'function' && item.name === functionName)
//     if (!objFunction) return

//     const inputs = objFunction.inputs

//     return inputs.map((item: any) => {
//       const { name, type } = item

//       if (type.includes('tuple')) {
//         const data = dataInput[name]
//         const components = item?.components
//         let res

//         if (type === 'tuple[]') {
//           res = data.map((dataItem: any) =>
//             components.map((componentsItem: any) => ({
//               ...componentsItem,
//               value: dataItem[componentsItem.name]
//             }))
//           )
//         } else {
//           res = components.map((compItem: any) => ({
//             ...compItem,
//             value: data[compItem.name]
//           }))
//         }

//         return res
//       }

//       return {
//         ...item,
//         value: dataInput[name]
//       }
//     })
//   }

//   const inputArray = generateInput(functionName, dataInput)
//   console.log('inputArray', inputArray)

//   const data = {
//     functionName,
//     isCall: true,
//     type: 'transaction',
//     to: '0x0000000000000000000000000000000000000002',
//     feeType: 'sc',
//     inputArray,
//     amount: '0',
//     gas: 5000000,
//     abiData: usdt
//   }
//   console.log('data', data)
//   const res = await window.finSdk.sendTransaction(data)
//   if (!res.success) return console.log('success false')

//   return res.data.returnValue
// }

export const getBalance = async (activeWallet: any) => {
  let data: any = await fetch('http://34.93.225.224:7899/api/usdt/balance', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      user: `0x${activeWallet}`
    })
  })
  data = await data.json()
  return data?.data?.balance
}
