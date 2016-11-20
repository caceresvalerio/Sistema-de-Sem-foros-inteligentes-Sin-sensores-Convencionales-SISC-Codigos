var TigoUtility = (function () {
    return{
        saveGroupsInSesssion: function (xhr, status, arguments) {
            if ("success" === status && arguments.valid === true) {
                var originUrl = location.origin;
                
                if (typeof (Storage) !== "undefined") {
                    sessionStorage.setItem("groups", arguments.groups);
                    sessionStorage.setItem("origin", originUrl);
                    sessionStorage.setItem("username", arguments.username);
                } else {
                    Cookies.set('groups', arguments.groups);
                    Cookies.set('origin', originUrl);
                    Cookies.set("username", arguments.username);
                }
                
                var url = arguments["redirect-url"];
                
                if(url === ""){
                    url = arguments["unauthorized-user-url"];
                }
                location.href = location.href + url;
            }
        }
    }
})();