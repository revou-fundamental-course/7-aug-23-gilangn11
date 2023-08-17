document.getElementById("calculate").addEventListener("click", function() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
  
    if (!isNaN(base) && !isNaN(height)) {
      const area = 0.5 * base * height;
      const perimeter = base + base + base;
      
      document.getElementById("areaResult").textContent = area.toFixed(2);
      document.getElementById("perimeterResult").textContent = perimeter.toFixed(2);
      
      
      document.getElementById("calculationResult").innerHTML = `
        Luas Segitiga = 1/2 * ${base} * ${height} = ${area.toFixed(2)}<br>
        Keliling Segitiga = (${base} + ${base} + ${base}) = ${perimeter.toFixed(2)}
      `;
    } else {
      document.getElementById("areaResult").textContent = "-";
      document.getElementById("perimeterResult").textContent = "-";
      document.getElementById("calculationResult").textContent = "";
    }
  });
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
    document.getElementById("areaResult").textContent = "-";
    document.getElementById("perimeterResult").textContent = "";
    document.getElementById("calculationResult").textContent = "";
  });