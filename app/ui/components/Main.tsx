import React from "react";

export default function Main({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      {children}
    </main>
  )
}