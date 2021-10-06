
import React, { Component, ReactElement, ReactNode } from 'react'

interface IState {
    test?: string;
}

interface IProps {
    children?: ReactElement[];
    classes?: any;
}

export function Header(props: any): ReactElement {
    return (
        <>{props.content}</>
    )
}

export function Footer(props: any) {
    return (
        <>{props.content}</>
    )
}

export function Body(props: any) {
    return (
        <>{props.content}</>
    )
}


class PublicLayout extends Component<IProps, IState> {
    static Header = Header
    static Body = Body
    static Footer = Footer

    constructor(props: IProps) {
        super(props)

        this.state = {
            test: 'helo'
        }
    }

    render() {
        const { children, classes }: any = this.props
        const header = children.find((child: any) => child.type === Header)
        const body = children.find((child: any) => child.type === Body)
        const footer = children.find((child: any) => child.type === Footer)

        return (
            <>
                <div className={classes.content}>
                    <header>
                        {header ? header.props.children : null}
                    </header>
                    <main>
                        {body ? body.props.children : null}
                    </main>
                    <footer>
                        {footer ? footer.props.children : null}
                    </footer>
                </div>
            </>
        )
    }
}

export default PublicLayout;