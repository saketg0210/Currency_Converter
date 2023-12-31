const URL2 = "https://countriesnow.space/api/v0.1/countries/flag/images";
const country = async () => {
  let answer = await fetch(URL2);
  let response = await answer.json();
  let countryname = response.data;
    const table = document.querySelector("table");
  for (let key of countryname) {
    let Cname=key.name;
    let CC_code= `${key.iso2}`;
    let C_code = `${key.iso3}`;
    let C_flag = key.flag;
    let newTr = `<tr>
    <td>${Cname}</td>
    <td>${CC_code}</td>
    <td>${C_code}</td>
    <td><img src="${C_flag}"></td>
</tr>`;
      table.innerHTML += newTr;
    
  }
}
country();