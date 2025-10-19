import React from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

function StackableCard() {
  return (
    <div className="w-full">
            <ScrollStack useWindowScroll={true}>
            <ScrollStackItem itemClassName="bg-gradient-to-br from-rose-100 to-rose-200">
                <h2 className="text-3xl font-bold mb-4">Card 1</h2>
                <p className="text-lg">This is the first card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-100 to-blue-200">
                <h2 className="text-3xl font-bold mb-4">Card 2</h2>
                <p className="text-lg">This is the second card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-gradient-to-br from-green-100 to-green-200">
                <h2 className="text-3xl font-bold mb-4">Card 3</h2>
                <p className="text-lg">This is the third card in the stack</p>
            </ScrollStackItem>
            </ScrollStack>
            </div>
  )
}

export default StackableCard