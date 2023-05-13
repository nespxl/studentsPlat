import { ReactNode } from "react";
import { Dispatch, SetStateAction } from "react"

export interface IFormField {
    name?: string
    surname?: string
    password?: string
    repassword?: string
    errors?: string
}

export interface INews {
    id?: number;
    title?: string;
    body?: string;
    userId?: number;
}

export interface IInputForm {
    title?: string
    place: string
    type: string
    name: string
    helperText?: string
    ref1?: any
    errors?: any
    props?: any
    onBlur?: any
    onChange?: any
    value?: string 
    children?: ReactNode
    className: string
}

export interface ILinkPerson {
    text: string
    link: string
}

export interface IWrapperPerson {
    title: string
    children: ReactNode
}

export interface IChildren {
    children: ReactNode
}

export interface IReLink {
    children: ReactNode
    relink: string
    deletes: any
}

export interface IRadio {
    value: string
    name: string
    className: string
}

export interface ICheckbox {
    value: string
}

export interface ISelect {
    selected: string
    setSelected: any
    options: Array<string>
}

export interface IValidateTextInput {
    e: any
    setState: any
    setStateError: any
}

export interface ISocket {
    socket: any
}

export interface IMessage {
    message: any
}

export interface ICardSummary {
    company: string
    direction: string
    time: string
    task: string
    kSkills: string
}

export interface IButton {
    setCount: Dispatch<SetStateAction<number>>
    count: number
}

export interface IInputTel {
    placeholder: string
    title: string
}

export interface INewsList {
    array: any
}

export interface ITextArea {
    placeholder?: string
}
