export function getAllDogs() {
    return fetch("/dogs")
}

export function getDogNumberTwo() {
    return fetch("/dogs/2")
}

export function postNewDog() {
    const urlparams = new URLSearchParams({ name: "Rosie", age: 1 })
    return fetch("/dogs", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: urlparams });
}

export function postNewDogV2(name, age) {
    const urlparams = new URLSearchParams({ age, name })
    return fetch("/dogs", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: urlparams })
}

export function deleteDog(id) {
    return fetch(`/dogs/${id}/delete`, { method: "POST", headers: { "AUTH": "ckyut5wau0000jyv5bsrud90y" } })
}
