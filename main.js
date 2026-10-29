const products = [
    { name: "Xadrez",            category: "Estratégia", amount: 12, value: 90  },
    { name: "Banco Imobiliário", category: "Familiar",   amount: 15, value: 130 },
    { name: "War",               category: "Estratégia", amount: 8,  value: 160 },
    { name: "Dominó",            category: "Clássico",   amount: 25, value: 35  }
];

const tableBody = document.getElementById("tableBody")

for (let p of products){
    const line = document.createElement("tr")

    line.innerHTML = `
        <td class="name">${p.name}</td>
        <td>${p.category}</td>
        <td>${p.amount}</td>
        <td>${p.value.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    tableBody.appendChild(line)
}
