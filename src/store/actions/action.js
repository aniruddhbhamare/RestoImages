import * as types from '../actionsTypes';

export const getRamenRestaurantdetails = () => {
  // alert("inside action")
  return dispatch => {
    dispatch(getRestoData())
    // dispatch(getImageData())
    // fetch('https://retoolapi.dev/2feJeM/carddata')
    fetch('https://accubits-image-assets.s3.ap-southeast-1.amazonaws.com/john/TopRamen8d30951.json')
      .then((response) => response.json())
      .then((json) => {
        // return json;
        // alert(JSON.stringify(json))
        console.log("RestoData", JSON.stringify(json))

        dispatch(addRestoData(json))
      })
      .catch((error) => {
        console.error(error);
      });
    // return addCardData(data);
  }
}

const addRestoData = (payload) => ({
  type: types.ADD_RESTO_DATA,
  payload
})

const getRestoData = () => ({
  type: types.PENDING_RESTO_DATA,
})

export const getImageData = () => {

  return dispatch => {
    dispatch(pendingImgData())
    fetch('https://accubits-image-assets.s3.ap-southeast-1.amazonaws.com/john/noodlesec253ad.json')
      .then((response) => response.json())
      .then((json) => {
        // alert(JSON.stringify(json))
        console.log("ImageData", JSON.stringify(json))
        dispatch(addImageData(json))
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

const addImageData = (payload) => ({
  type: types.GET_IMAGE_DATA,
  payload
})

const pendingImgData = () => ({
  type: types.PENDING_IMAGE_DATA
})




// import * as types from '../actionsTypes';

// export const getRamenRestaurantdetails = () => {
//   // alert("inside action")
//   return dispatch => {
//     dispatch(getRestoData())


//     fetch('https://accubits-image-assets.s3.ap-southeast-1.amazonaws.com/john/noodlesec253ad.json')
//       .then((response) => response.json())
//       .then((jsonOne) => {
//         // alert(JSON.stringify(json))


//         fetch('https://accubits-image-assets.s3.ap-southeast-1.amazonaws.com/john/TopRamen8d30951.json')
//           .then((response) => response.json())
//           .then((json) => {

//             json.forEach((i) => {
//               return i["url"] = null
//             })
//             // return json;
//             // alert(JSON.stringify(json))
//             json.forEach(element => {
//               jsonOne.forEach(i => {
//                 // return temp = element["url"] = i.Image

//                 element.url = i.Image
//               });
//             });


//             alert("Temp " + JSON.stringify(json))
//             dispatch(addRestoData(json))
//             dispatch(addImageData(jsonOne))

//           })
//           .catch((error) => {
//             console.error(error);
//           });


//       })
//       .catch((error) => {
//         console.error(error);
//       })


//     // // fetch('https://retoolapi.dev/2feJeM/carddata')
//     // fetch('https://accubits-image-assets.s3.ap-southeast-1.amazonaws.com/john/TopRamen8d30951.json')
//     //   .then((response) => response.json())
//     //   .then((json) => {
//     //     // return json;
//     //     // alert(JSON.stringify(json))
//     //     dispatch(addRestoData(json))
//     //   })
//     //   .catch((error) => {
//     //     console.error(error);
//     //   });
//     // return addCardData(data);
//   }
// }

// const addRestoData = (payload) => ({
//   type: types.ADD_RESTO_DATA,
//   payload
// })

// const getRestoData = () => ({
//   type: types.PENDING_RESTO_DATA,
// })

// export const getImageData = () => {
//   return dispatch => {
//     fetch('https://accubits-image-assets.s3.ap-southeast-1.amazonaws.com/john/noodlesec253ad.json')
//       .then((response) => response.json())
//       .then((json) => {
//         alert(JSON.stringify(json))
//         dispatch(addImageData(json))
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//   }
// }

// const addImageData = (payload) => ({
//   type: types.GET_IMAGE_DATA,
//   payload
// })


