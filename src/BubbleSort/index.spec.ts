import BubbleSort from '@src/bubblesort'
import { randomArray } from '@src/utils/data'

test('should sort the given array with bubble sort strategy', () => {
	const bubbleSort = new BubbleSort(randomArray)

	bubbleSort.sort()

	expect(bubbleSort.result()).toEqual(randomArray.sort())
})
