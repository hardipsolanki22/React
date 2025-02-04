import React from "react";

export async function githubInfoLoader() {
    const response = await  fetch('https://api.github.com/users/HardipSolanki')
     return await response.json()
}