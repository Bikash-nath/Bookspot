import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { colors } from '../../utils/constants/bgColors'

function BgCover(props) {
	const [color, setColor] = useState(null)
	const router = useRouter()

	useEffect(() => {
		const id = router.query.bookId || router.query.authorId
		const index = Math.floor(id.slice(-2) / 5)
		const bgColor = colors[index]
		setColor(bgColor)
	}, [])

	return (
		<div className='flex-grow scrollbar-hide select-none relative'>
			<div className={`bg-gradient-to-b ${color} to-black`}>
				<section
					className={`flex flex-col md:flex-row items-center md:items-end justify-center md:justify-around text-white space-y-2 md:space-y-0 space-x-6 md:space-x-10 h-auto md:px-4 pb-4`}>
					{props.children}
				</section>
			</div>
			{console.log('return dom:--', color)}
		</div>
	)
}

// export async function getServerSideProps(context) {
// 	console.log(context.params)
// 	return {
// 		props: {
// 			color: 'from-red-500',
// 		},
// 	}
// }

export default BgCover

/*
<div className='flex items-center justify-center md:justify-between w-full mb-20'>
	<section
		className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white pl-5 pb-5 border-[.5px]`}>
		{props.children}
	</section>
</div>
*/
