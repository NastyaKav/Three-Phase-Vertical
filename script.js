// Get DOM elements
const qg1 = document.getElementById("qg");
const qo1 = document.getElementById("qo");
const qw1 = document.getElementById("qw");
const po1 = document.getElementById("po");
const to1 = document.getElementById("to");
const sg1 = document.getElementById("sg");
const sgo1 = document.getElementById("sgo");
const sgw1 = document.getElementById("sgw");
const mo1 = document.getElementById("mo");
const mw1 = document.getElementById("mw");
const dml1 = document.getElementById("dml");
const dmw1 = document.getElementById("dmw");
const dmo1 = document.getElementById("dmo");
const z1 = document.getElementById("z");
const m1 = document.getElementById("m");
const tro1 = document.getElementById("tro");
const trw1 = document.getElementById("trw");
const cdi = 0.34
const calculateBtn = document.getElementById("calculate-btn");
const resultDisplay = document.getElementById("result");

// Add click event listener to the button
calculateBtn.addEventListener("click", () => {
    // Parse input values as numbers
    const qg = parseFloat(qg1.value);
    const qo = parseFloat(qo1.value);
    const qw = parseFloat(qw1.value);
    const po = parseFloat(po1.value) || 1;
    const to = parseFloat(to1.value) || 1;
    const sg = parseFloat(sg1.value);
    const sgo = parseFloat(sgo1.value);
    const sgw = parseFloat(sgw1.value);
    const mo = parseFloat(mo1.value);
    const mw = parseFloat(mw1.value);
    const dml = parseFloat(dml1.value);
    const dmw = parseFloat(dmw1.value);
    const dmo = parseFloat(dmo1.value);
    const z = parseFloat(z1.value);
    const m = parseFloat(m1.value);
    const tro = parseFloat(tro1.value);
    const trw = parseFloat(trw1.value);
    
    // Check if inputs are valid numbers
    // if (isNaN(number1) || isNaN(number2)) {
    //     resultDisplay.textContent = "Invalid input. Please enter valid numbers.";
    //     return;
    // }

    //шаг 1
    const pl = 62.4 * (141.5/(131.5 + sgo))

    // шаг 2
    const pg = 2.7 * ((sg * po)/(to * z))

    const api = (141.5/(141.5/(sgo+131.5))-131.5)

    const dsg = sgw - api

    // шаг 3
    const vt1 = 0.0119 * Math.pow(((pl - pg) / pg) * (dml / cdi), 0.5);

    // шаг 4
    const re1 = 0.0049 * ((pg*dml*vt1)/m)

    // шаг 5
    const cd1 = (24/re1) + (3/(Math.pow(re1, 0.5))) + 0.34

    // шаг 6
    const vt2 = 0.0119 * Math.pow(((pl - pg) / pg) * (dml / cd1), 0.5);

    const re2 = 0.0049 * ((pg*dml*vt2)/m)

    const cd2 = (24/re2) + (3/(Math.pow(re2, 0.5))) + 0.34

     // шаг 7
   const vt3 = 0.0119 * Math.pow(((pl - pg) / pg) * (dml / cd2), 0.5);

   const re3 = 0.0049 * ((pg*dml*vt3)/m)
 
   const cd3 = (24/re3) + (3/(Math.pow(re3, 0.5))) + 0.34
 
      // шаг 8
    const vt4 = 0.0119 * Math.pow(((pl - pg) / pg) * (dml / cd3), 0.5);

    const re4 = 0.0049 * ((pg*dml*vt4)/m)

    const cd4 = (24/re4) + (3/(Math.pow(re4, 0.5))) + 0.34

    // шаг 9
    const vt5 = 0.0119 * Math.pow(((pl - pg) / pg) * (dml / cd4), 0.5);

    const re5 = 0.0049 * ((pg*dml*vt5)/m)

    const cd5 = (24/re5) + (3/(Math.pow(re5, 0.5))) + 0.34

    // шаг 10
    const vt6 = 0.0119 * Math.pow(((pl - pg) / pg) * (dml / cd5), 0.5);

    const re6 = 0.0049 * ((pg*dml*vt6)/m)

    const cd6 = (24/re6) + (3/(Math.pow(re6, 0.5))) + 0.34

    // шаг 11
    const dl = 5040 * (((to+460)*z*qg)/po) * Math.pow(((pg/(pl-pg))*(cd6/dml)), 0.5)
    const dw = 6690 * (qo*mw)/(dsg*Math.pow*(dmw, 2))
    const doi = 6690 * (qw*mo)/(dsg*Math.pow*(dmo, 2))
    //шаг 12 считаем  все ho+hw

    const maxValue = Math.max(dl, dw, doi);

    var dt = 84
    const hohw84 = (tro*qo+trw*qw)/(0.12 * Math.pow(dt, 2)) 
    document.getElementById("hohw84").innerText = hohw84.toFixed(2);
    var dt = 90
    const hohw90 = (tro*qo+trw*qw)/(0.12*Math.pow(dt, 2)) 
    document.getElementById("hohw90").innerText = hohw90.toFixed(2);
    var dt = 96
    const hohw96 = (tro*qo+trw*qw)/(0.12*Math.pow(dt, 2)) 
    document.getElementById("hohw96").innerText = hohw96.toFixed(2);
    var dt = 102
    const hohw102 = (tro*qo+trw*qw)/(0.12*Math.pow(dt, 2)) 
    document.getElementById("hohw102").innerText = hohw102.toFixed(2);

       //шаг 14 считаем  все lss

    var dt = 84
    const lss84 = ((dt+hohw84+40)/12)
    document.getElementById("lss84").innerText = lss84.toFixed(2);
    var dt = 90
    const lss90 = ((dt+hohw90+40)/12)
    document.getElementById("lss90").innerText = lss90.toFixed(2);
    var dt = 96
    const lss96 = ((dt+hohw96+40)/12)
    document.getElementById("lss96").innerText = lss96.toFixed(2);
    var dt = 102
    const lss102 = ((dt+hohw102+40)/12)
    document.getElementById("lss102").innerText = lss102.toFixed(2);
    
       //шаг 15 считаем  все sr

    
    const sr84 = (12*lss84)/84
    document.getElementById("sr84").innerText = sr84.toFixed(2);
    const sr90 = (12*lss90)/90
    document.getElementById("sr90").innerText = sr90.toFixed(2);
    const sr96 = (12*lss96)/96
    document.getElementById("sr96").innerText = sr96.toFixed(2);
    const sr102 = (12*lss102)/102
    document.getElementById("sr102").innerText = sr102.toFixed(2);

  //  const sresult = [];

  //  sresult.push(s324, s330, s336, s342, s348, s224, s230, s236, s242, s124, s130, s136);

  //  const filteredNumbers = sresult.filter(num => {
  //   console.log("Checking number:", num);
  //   return num < 4;
  //   });

  //  const resultDiv = document.getElementById("result");
  //  resultDiv.textContent = `${filteredNumbers.join(", ")}`;

    
      
   


    // Display the result
   resultDisplay.textContent = maxValue.toFixed(2);
});
