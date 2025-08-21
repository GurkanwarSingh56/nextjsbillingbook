'use client'

import { deleteCustomer } from '@/app/lib/actions'

export function DeleteCustomerButton({ id, name }: { id: string; name: string }) {
  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete customer "${name}"?`)) {
      await deleteCustomer(id)
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-md border p-2 hover:bg-gray-100"
      title="Delete Customer"
    >
      <span className="sr-only">Delete</span>
      🗑️
    </button>
  )
}
