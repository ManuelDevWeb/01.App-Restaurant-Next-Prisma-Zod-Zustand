import CategoriesService from '@/src/services/categoriesService';
import NavItemIcon from '../ui/NavItemIcon';

const OrderSidebar = async () => {
  const categories = await CategoriesService.getCategories();

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <nav className='mt-10'>
        {categories.map(category => (
          <NavItemIcon 
            key={category.id}
            category={category}
          />
        ))}
      </nav>
    </aside>
  )
}

export default OrderSidebar