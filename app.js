/*TASK TipCalculator*/

//                                                          //AUTHOR: Daniel Orudna.
//                                                          //DATE: September 13, 2021.

    //==================================================================================================================
        //--------------------------------------------------------------------------------------------------------------
        /*CONSTANTS*/

        const numBillInput = document.querySelector("#bill-number");
        const strBillDivided = document.querySelector(".strBillText");
        const strTipTotal = document.querySelector(".strTipText");
        const numPeopleInput = document.querySelector("#num-people-input");
        const btnTipOptions = document.querySelectorAll(".tip-btn");
        const btnReset = document.querySelector(".reset");

        //--------------------------------------------------------------------------------------------------------------
        /*FUNCTIONS*/

        function voidActivateReset(){
            btnReset.disabled = false;
            btnReset.style.backgroundColor = "#B6E7DE";
        }

        numBillInput.addEventListener('input', () => {
            if (numPeopleInput.value == ""){
                strBillDivided.innerText = "$" + (numBillInput.value);
                voidActivateReset();
            } else {
                strBillDivided.innerText = "$" + (numBillInput.value / numPeopleInput.value).toFixed(2);
                voidActivateReset();
            }
        });

        numPeopleInput.addEventListener('input', () =>{
            if (numPeopleInput.value == ""){
                strBillDivided.innerText = "$" + (numBillInput.value * 1);
            } else {
                strBillDivided.innerText = "$" + (numBillInput.value / numPeopleInput.value).toFixed(2);
            }
        });

        (function selectTip(){
            btnTipOptions.forEach(btn => {
                btn.addEventListener('click', () => {
                    
                    let numBtnValue = btn.value.replace('%', '');
                    if(numBillInput.value == ""){
                        strTipTotal.innerText = "$0.00";
                    } else {
                        strTipTotal.innerText = "$" + (numBillInput.value * (numBtnValue / 100)).toFixed(2);
                    }

                })
            })
        })();

        btnReset.addEventListener('click', () => {
            strBillDivided.innerText = "$" + (numBillInput.value * 0);
            strTipTotal.innerText = "$0.00";
            numBillInput.value = '$0';
            numPeopleInput.value = 1;
            btnReset.disabled = true;
            btnReset.style.backgroundColor = "#3D686C";
        })


        /*TASK */
        //--------------------------------------------------------------------------------------------------------------
        //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        //--------------------------------------------------------------------------------------------------------------
        /*END-TASK*/

    //==================================================================================================================
/*END-TASK*/
