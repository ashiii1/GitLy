import React from 'react'

const LikesPage = () => {
  return (
<div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
			<table className='w-full text-sm text-left rtl:text-right bg-glass overflow-hidden'>
				<thead className='text-xs uppercase bg-glass'>
					<tr>
						<th scope='col' className='p-4'>
							<div className='flex items-center'>No</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							Username
						</th>
						<th scope='col' className='px-6 py-3'>
							Date
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
        <tbody>
          <tr className='bg-glass border-b' >
            <td className='w-4 p-4'>
              <div className='flex items-center'>
                <span>1</span>
              </div>
            </td>

            <th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap'>
              
            </th>
          </tr>
        </tbody>
        </table>
        </div>
        
        )
}

export default LikesPage