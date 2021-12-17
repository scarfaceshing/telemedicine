import React, { FC, ReactElement } from 'react'

interface IProps {
    bold?: boolean;
    color?: string;
    children?: any;
    align?: string;
}

interface ICssObject {
 [key: string]: string | number
}

interface ICss {
  [key: string]: string | number | ICssObject
}

const TEXT_COLOR_PRIMARY = '#191919'
const TEXT_COLOR_SECONDARY = '#FFFFFF'
const TEXT_COLOR_TERIARY = '#E94C27'
const TEXT_COLOR_QUATERNARY = '#646464'
const TEXT_COLOR_QUINARY = '#969696'
const TEXT_COLOR_SENARY = null
const TEXT_COLOR_SEPTENARY = null
const TEXT_COLOR_OCTONARY = null
const TEXT_COLOR_NONARY = null
const TEXT_COLOR_DENARY = null
const TEXT_COLOR_DUODENARY = null
const TEXT_COLOR_VIGENARY = null

const FONT_WEIGHT_LG = 700
const FONT_WEIGHT_MD = 400

const STYLE_HEAD_ONE = {
 fontSize: '48px',
 lineHeight: '58.51px'
}

const STYLE_HEAD_TWO = {
 fontSize: '32px',
 lineHeight: '39.01px'
}

const STYLE_HEAD_THREE = {
 fontSize: '24px',
 lineHeight: '29.26px'
}

const STYLE_HEAD_CONTENT = {
 fontSize: '16px',
 lineHeight: '19.5px'
}

const STYLE_HEAD_TITLE = {
 fontSize: '96px',
 lineHeight: '117.02px'
}

const STYLE_HEAD_TYPEFACE = {
 fontSize: '48px',
 lineHeight: '58.51px'
}

const STYLE_PARAGRAPH_ONE = {
 fontSize: '48px',
 lineHeight: '58.51px'
}

const STYLE_PARAGRAPH_TWO = {
 fontSize: '32px',
 lineHeight: '48px'
}

const STYLE_PARAGRAPH_THREE = {
 fontSize: '24px',
 lineHeight: '36px'
}

const STYLE_PARAGRAPH_CONTENT = {
 fontSize: '18px',
 lineHeight: '21.94px'
}

const STYLE_PARAGRAPH_TITLE = {
 fontSize: '96px',
 lineHeight: '117.02px'
}

const STYLE_PARAGRAPH_CUSTOM_1= {
 fontSize: '16px',
 lineHeight: '24px'
}

const STYLE_PARAGRAPH_CUSTOM_2= {
 fontSize: '14px',
 lineHeight: '17.07px'
}
 

const color_selection = (type: string) => {
 switch (type) {
 case 'primary':
  return TEXT_COLOR_PRIMARY
  break
 case 'secondary':
  return TEXT_COLOR_SECONDARY
  break
 case 'tertiary':
  return TEXT_COLOR_TERIARY
  break
 case 'quaternary':
  return TEXT_COLOR_QUATERNARY
  break
 case 'quinary':
  return TEXT_COLOR_QUINARY
  break
 }
}

export const ParagraphOne = ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
 
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_PARAGRAPH_ONE
 }
        
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}


export const ParagraphTwo = ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
   
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_PARAGRAPH_TWO
 }
          
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}
 
export const ParagraphThree = ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
    
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_PARAGRAPH_THREE
 }
           
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}

export const ParagraphContent= ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
     
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_PARAGRAPH_CONTENT
 }
            
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}

export const ParagraphTitle= ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
      
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_PARAGRAPH_TITLE
 }
             
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}

export const ParagraphCustomOne= ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
       
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_PARAGRAPH_CUSTOM_1
 }
              
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}

export const ParagraphCustomTwo= ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
        
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_PARAGRAPH_CUSTOM_2
 }
               
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}

export const HeadOne = ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY

 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_HEAD_ONE
 }
       
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}

export const HeadTwo = ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
   
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_HEAD_TWO
 }
          
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}

export const HeadThree = ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
      
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_HEAD_THREE
 }
             
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}

export const HeadContent = ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
         
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_HEAD_CONTENT
 }
                
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}

export const HeadTitle = ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
            
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_HEAD_TITLE
 }
                   
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}

export const HeadTypeface = ({ children, align = 'center', color = 'primary', bold = false}: IProps) => {
 const content = children
 const fontColor = color_selection(color) || TEXT_COLOR_PRIMARY
               
 const CSS: ICss = {
  textAlign: align,
  fontStyle: 'normal',
  fontWeight: (bold === true) ? FONT_WEIGHT_LG : FONT_WEIGHT_MD,
  color: fontColor,
  ...STYLE_HEAD_TYPEFACE
 }
                      
 return ( 
  <>
   <div style={CSS}>
    {content}
   </div>
  </>
 )
}