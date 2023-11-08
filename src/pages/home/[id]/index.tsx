import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import SidebarLayout from '@/components/layouts/sidebar/SidebarLayout'
import {useRouter} from 'next/router'
import React from 'react'

export default function HomeIndex() {
  const router = useRouter()
  const id = router.query.id
  console.log('id: ', id);

  return (
    <div>index+{id} </div>
  )
}

HomeIndex.getLayout = (page: any) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
}
