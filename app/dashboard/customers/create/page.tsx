import { Metadata } from 'next';
import CreateCustomerForm from '@/app/ui/customers/create-form';

export const metadata: Metadata = {
  title: 'Create Customer',
};

// Breadcrumbs Component
function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Array<{ label: string; href: string; active?: boolean }> }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className="flex text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {breadcrumb.active ? (
              <span className="text-gray-900 font-medium">{breadcrumb.label}</span>
            ) : (
              <a
                href={breadcrumb.href}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {breadcrumb.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create Customer',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      <CreateCustomerForm />
    </main>
  )
}
