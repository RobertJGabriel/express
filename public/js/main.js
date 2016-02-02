// $(function () {
//     $('#login').submit(function (e) {
//         e.preventDefault();
//         console.log('ss');
//         $.ajax({
//             type: 'POST',
//             url: 'https://digitalcrew.teamwork.com/launchpad/v1/login.json',
//             data: {
//                 username: $('#username').val(),
//                 password: $('#password').val()
//             },
//             dataType: 'json',
//             contentType: 'application/json'
//         }).done(function (data) {
//             alert(data);
//             console.log(data);
//             // if 200
//             // create cookie
//             // redirect to index
//             window.location = "/userDetails";
//         });
//         return false;
//     });
// })
