(
    function display(){
        details = {
            firstName : 'Naveen',
            lastName : 'Mannam',
            age : 34,
            getDetails : function(){
                return this.firstName + " " + this.lastName;
            }
        };
    }
)();