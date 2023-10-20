import { Meta, StoryObj } from '@storybook/react';
import { Mylabel, } from '../../component/Mylabel';



 const meta = {

    title: 'Example/Mylabel',
    component: Mylabel,
    tags: ['autodocs'],
    argTypes: {
       color: {
         options: ["primary","secondary","tertiary"],
         type  : ("select" as any)
       },
    }
} satisfies Meta<typeof Mylabel>;


export default meta


type Story = StoryObj<typeof meta>


export const basic: Story = {
 args:{
    size:'normal',
    
 }
}

export const all_Caps: Story = {
 args:{
    size:"normal",
    label: "Label",
    allCaps: true
 }
}

export const Secondary: Story = {
 args:{
    size: "normal",
    color: 'secondary',
    
 }
}

export const Tertiari: Story = {
    args:{
       size: "normal",
       color: 'tertiary'
    }
   }

   export const CustomColor: Story = {
    args:{
       size: "h1",
       customFontColor: "#5517ac",
       
    }
   }   