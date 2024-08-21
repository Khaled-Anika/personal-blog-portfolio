import Pagination from '../components/Pagination'
import { getPortfolioProjects } from '../lib/services';
import Image from 'next/image';

const PROJECTS_PER_PAGE = 5;


export default async function ProjectListing({ searchParams }: { searchParams: { page: string } }) {
  const allProjects : Project[] = await getPortfolioProjects();
  console.log('allprojects', allProjects);
  const currentPage = parseInt(searchParams.page) || 1;
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);

  return (
    <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-8'>My Portfolio</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {currentProjects.map((project) => (
                <div key={project.id} className='bg-white rounded-lg shadow-md'>
                    <div className='relative h-48 w-full'>
                        <Image
                            src={project.imageSrc}
                            alt={project.imageAlt}
                            fill
                            sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw'
                            className='object-cover'
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} pageType={'portfolio'} />
    </div>
  )
}