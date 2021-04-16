var calculadora = {
    display: document.querySelector('.display'),

    start() {
        this.clickButton();
        this.pressKey();
    },

    pressKey(){
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13){
                this.result();
            }
            if(e.keyCode === 111){
                btnDisplay('/');
            }
            if(e.keyCode === 106){
                btnDisplay('*');
            }
            if(e.keyCode === 109){
                btnDisplay('-');
            }
            if(e.keyCode === 107){
                btnDisplay('+');
            }
            if(e.keyCode === 194){
                btnDisplay('.');
            }
            if(e.keyCode >= 97 && e.keyCode <= 105 ||e.keyCode >= 49 && e.keyCode <= 57){
                btnDisplay(this.display.value += e.target.innerText);
                
            }
        });
    },

    clearDisplay(){
        this.display.value = '';    
    },

    delClick(){
        this.display.value = this.display.value.slice(0, -1);
    },

    result(){
        let result = this.display.value;
        try{
            result = eval(result);
            if(result === ''|| Number.isNaN(result) || typeof result !== 'number'){
                alert('Conta inválida');
                return;
            }
            this.display.value = String(result);
        }catch(err){
            alert('Conta inválida');
            this.clearDisplay();
            return;
        }
    },

    clickButton(){
        document.addEventListener('click', (e) =>{
            const element = e.target;
            if(element.classList.contains('btn-num')){
                this.btnDisplay(element.innerText);
                
            }

            if(element.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if(element.classList.contains('btn-del')){
                this.delClick();
            }

            if(element.classList.contains('btn-equal')){
                this.result();
            }

            this.display.focus();
        });
    },

    btnDisplay(value){
        this.display.value += value;
    }

};

calculadora.start()