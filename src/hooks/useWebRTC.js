import { useState } from "react"

export const useWebRTC = () => {
    const [clients, setClients] = useState([
        {
            id: "1", name: "Yash"
        }
    ])
    return { clients };
}