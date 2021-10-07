
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

  // const header = children[0]
  // const body = children[1]
  // const footer = children[2]

  console.log(header)

  return (
   <>
    <div>
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
