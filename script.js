//we need to register the component with #signUpForm
Vue.component('signUpForm',{
    template:`#signUpForm`
    ,
    data() {
        return {
            password:'',
            confirmPassword:'',
            email:'',
            msg:[],
            disableSubmitButton:true
        }
    },
    watch: {
        email(value){
            this.eventName();
            this.email=value;
            //console.log(name);
            //console.log(value);
            this.checkedEmail(value);
        },
        password(value){
            this.eventName();
            this.password=value;
            //console.log(name);
            this.checkedPassword(value);
        },
        confirmPassword(value){
            this.eventName();
            this.confirmPassword=value;
            //console.log(name);
            this.checkConfirmPassword(value);
        }
    },
    methods: {
        changetnc(){
            //this.componentName='tnc';
            this.$emit('change','tnc')
        },
        checkedEmail(value){
            if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(value))
			{
				this.msg[name] = '';
			}else{
				this.msg[name] = 'Keep Typing... We are waiting for correct Email';
			}
        },
        checkedPassword(value){
           this.passwordLengthCheck(value);
        },
        checkConfirmPassword(value){
            this.passwordLengthCheck(value);
            if(value==this.password){
                //console.log('Match');
                this.disableSubmitButton=false;
                this.msg[name]=''
            }
            else{
                this.msg[name]='Password does not match please try again'
            }
        },
        passwordLengthCheck(passwordToCheck){
            remainingChars = 6 - passwordToCheck.length;
			if (passwordToCheck.length < 6) {
				this.msg[name] = 'Password must contain 6 characters. '+ remainingChars +' more to go...';
			}else{
				this.msg[name] ='';
				return true;
			}
        },
        eventName(){
            name = event.target.name;
        },
        submit(){
            alert('Great the project is successfully finish!!!')
        }

    }
});

Vue.component('tnc',{
    template:`#tnc`,
    methods: {
        backlogin(){
            //emiting backlogin event
            this.$emit('backtologin','signUpForm')
        }
    },
});

new Vue({
    el:'#app',
    data() {
        return {
            componentName:'signUpForm'
        }
    },
    methods: {
        change(newComp){
            this.componentName=newComp;
        },
        backtologin(newComp1){
            this.componentName=newComp1;
        }
    },
  
});