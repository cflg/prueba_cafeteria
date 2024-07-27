/* ENCONTRE UNA API GRATUITA QUE DA INFO SOBRE CAFE ASI QUE PAROVECHE
ESTE ES EL EJEMPLO: (https://sampleapis.com/api-list/coffee) */

// Con estas funciones traiga la data de los emdpoints
// fetch es tan facil de usar que decidi no instalar axis evitando
// la complejidad y posibles errores de una libreria adicional
export async function GetHotCoffee() {
  try {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const json = await resp.json();
    return json;
  } catch (err) {
    return err;
  }
}

export async function GetIcedCoffee() {
  try {
    const resp = await fetch('https://api.sampleapis.com/coffee/iced');
    const json = await resp.json();
    return json;
  } catch (err) {
    return err;
  }
}
