import { ReactNode } from "react";

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

export interface IRadio {
    value: string
    name: string
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
