// // import React, {Component} from 'react'; 
// import dotenv from 'dotenv'; 

// const FacebookLogin = () => {

//     dotenv.config({path: 'client/.env'}); 
//     const facebook_App_ID = process.env.REACT_APP_FACEBOOK_APP_ID; 

//     return new Promise( resolve =>{
        
//          /**
//      * To access some client side functionality from facebook in my app, we need to add the `FACEBOOK SDK FOR JAVASCRIPT` in our app. They had given the code for various js frameworks like angular, jquery, vue etc but not react so this is my try to make it compatible. 
//      * The SDK: 
//         - Enables you to use the Like Button and other Social Plugins on your site.
//         - Enables you to use Facebook Login to lower the barrier for people to sign up on your site.
//         - Makes it easy to call into Facebook's Graph API.
//         - Launch Dialogs that let people perform various actions like sharing stories.
//         - Facilitates communication when you're building a game or an app tab on Facebook.
//      * 
//      *     
//      */

//         window.fbAsyncInit = () =>{
//             FB.init({
//                 appId : facebook_App_ID, 
//                 autoLogAppEvents: false, 
//                 xfbml: true, 
//                 version: 'v11.0'
//             }); 
//         }; 

//         window.FB.getLoginStatus((response) =>{
//             if(response){
//                 accountService.apiAuthenticate(response.accessToken).then(resolve); 
//             }
//             else{
//                 resolve(); 
//             }

//             // statusChangeCallback(response); 
//         }); 

//                 // load facebook sdk script
//         (function (d, s, id) {
//             var js, fjs = d.getElementsByTagName(s)[0];
//             if (d.getElementById(id)) { return; }
//             js = d.createElement(s); js.id = id;
//             js.src = "https://connect.facebook.net/en_US/sdk.js";
//             fjs.parentNode.insertBefore(js, fjs);
//         }(document, 'script', 'facebook-jssdk'));     


//     } );
// }
 
// export default FacebookLogin;