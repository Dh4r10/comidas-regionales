import { PRODUCTOS_API } from "@/api/SalonAPI"
import AuthContext from "@/contexts/AuthContext"
import SalonPedidosContext from "@/contexts/SalonPedidosContext"
import axios from "axios"
import React, { useContext, useState } from "react"
import AsyncSelect from "react-select/async"

const SelectAsync = (props) => {
    let { authTokens } = useContext(AuthContext)
    let { selectedOption, setSelectedOption } = useContext(SalonPedidosContext)

    const { field, fieldState, placeholder, disabled, setSelectedValue, name } = props

    const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens?.token),
    };

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
        setSelectedValue(selectedOption)
        if (field) {
            field.onChange(selectedOption)
        }
    }

    const promiseOptions = (inputValue) => {
        return new Promise((resolve, reject) => {
            axios.get(PRODUCTOS_API, { headers })
                .then(response => {
                    const options = response.data
                        .filter(producto => producto.nombre.toLowerCase().includes(inputValue.toLowerCase()))
                        .map(producto => ({
                            label: producto.nombre,
                            value: producto.nombre, // Ensure `value` is unique and meaningful
                            codigo: producto.id,
                            precio: producto.precio
                        }))
                    resolve(options)
                })
                .catch(error => {
                    console.error("Error fetching options:", error)
                    reject(error)
                })
        })
    }

    return (
        <AsyncSelect
            {...field}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: state.isFocused ? 0 : 0,
                }),
            }}
            className="select-async-salon"
            cacheOptions
            defaultOptions
            loadOptions={promiseOptions}
            onChange={handleChange}
            value={selectedOption} // Bind the state to the selected option
            placeholder={placeholder}
            isDisabled={disabled}
            id={name}
            name={name}
        />
    )
}

export default SelectAsync;
