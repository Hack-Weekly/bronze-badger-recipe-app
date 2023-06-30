import React from 'react'

export const Button = (props) => {
    //size = sm|md|lg
    //variant = primary|secondary
    const {size,variant} = props
    switch (variant) {
        case 'primary':
            switch (size) {
                case 'sm':
                 return(<button className='bg-primary-color hover:bg-primary-hover active:outline-borderColor-color text-center text-primary-buttonText m-1 p-2 text-sm rounded-lg' {...props}>{props.children}</button>)
                case 'md':
                 return(<button className='bg-primary-color hover:bg-primary-hover active:outline-borderColor-color text-center text-primary-buttonText m-1 py-2 px-3 text-lg rounded-lg' {...props}>{props.children}</button>)
                case 'lg':
                 return(<button className='bg-primary-color hover:bg-primary-hover active:outline-borderColor-color text-center text-primary-buttonText m-1 py-3 px-4 text-2xl rounded-lg' {...props}>{props.children}</button>)
                default:
                    break;
            }
            break;
        case 'secondary':
            switch (size) {
                case 'sm':
                 return(<button className='bg-primary-color hover:bg-primary-hover active:outline-borderColor-color text-center text-primary-buttonText m-1 p-2 text-sm rounded-lg' {...props}>{props.children}</button>)
                case 'md':
                 return(<button className='bg-primary-color hover:bg-primary-hover active:outline-borderColor-color text-center text-primary-buttonText m-1 py-2 px-3 text-lg rounded-lg' {...props}>{props.children}</button>)
                case 'lg':
                 return(<button className='bg-primary-color hover:bg-primary-hover active:outline-borderColor-color text-center text-primary-buttonText m-1 py-3 px-4 text-2xl rounded-lg' {...props}>{props.children}</button>)
                default:
                    break;
            }
            break;
    
        default:
            break;
    }
    
}
