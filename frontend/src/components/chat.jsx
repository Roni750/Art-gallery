import React, { useState, useEffect } from 'react'

import { socketService, SOCKET_EMIT_SEND_MSG, SOCKET_EVENT_ADD_MSG, SOCKET_EMIT_SET_TOPIC } from '../services/socket.service'

export function ChatApp({ id }) {
    const [msg, setMsg] = useState({ txt: '' })
    const [msgs, setMsgs] = useState([])
    const [topic, setTopic] = useState(id)

    useEffect(() => {
        socketService.emit(SOCKET_EMIT_SET_TOPIC, topic)
        socketService.on(SOCKET_EVENT_ADD_MSG, addMsg)
        return () => {
            socketService.off(SOCKET_EVENT_ADD_MSG, addMsg)
        }
    }, [])

    useEffect(() => {
        socketService.emit(SOCKET_EMIT_SET_TOPIC, topic)
    }, [topic])

    function addMsg(newMsg) {
        setMsgs(prevMsgs => [...prevMsgs, newMsg])
    }

    function sendMsg(ev) {
        ev.preventDefault()
        const newMsg = { txt: msg.txt }
        socketService.emit(SOCKET_EMIT_SEND_MSG, newMsg)
        setMsg({ txt: '' })
    }

    function handleFormChange(ev) {
        const { name, value } = ev.target
        setMsg(prevMsg => ({ ...prevMsg, [name]: value }))
    }

    return (
        <section className="chat">
            <ul className="chat-msgs clean-list">
                {msgs.map((msg, idx) => (<li key={idx}>{">"} {msg.txt}</li>))}
            </ul>

            <form className="controls-area" onSubmit={sendMsg}>
                <input
                    type="text" value={msg.txt} placeholder="Type your message here" onChange={handleFormChange}
                    name="txt" autoComplete="off" />
                <button>Send</button>
            </form>
        </section>
    )
}