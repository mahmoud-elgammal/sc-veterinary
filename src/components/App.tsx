import React, { useState } from 'react'
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#064B4F]">
      <div className="text-white">
        <button
          className="rounded-lg bg-white px-4 py-2 text-sm text-[#064B4F] transition-transform will-change-transform hover:scale-105"
          onClick={openModal}
        >
          Connect Wallet
        </button>
      </div>
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">
              Oops, Something went Wrong
            </DialogTitle>
            <Description>
              There&apos;s a Problem With Deploying of Smart Contract
            </Description>
            <div className="flex flex-row-reverse gap-4">
              <button onClick={closeModal}>Okay</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}

export default App
