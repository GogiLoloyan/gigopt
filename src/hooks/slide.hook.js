const useSlide = (arrImgs, delay, setIndex) => {
	let len, i, id
	const arr = i => {
		if (i >= 0 && i < len) return i
		return Math.abs(len - Math.abs(i))
	}

	const slider = () => {
		arrImgs[arr(i - 1)].classList.remove('prev')
		arrImgs[arr(i)].classList.remove('display')
		arrImgs[arr(i)].classList.add('prev')
		arrImgs[arr(i + 1)].classList.remove('next')
		arrImgs[arr(i + 1)].classList.add('display')
		arrImgs[arr(i + 2)].classList.add('next')

		i = arr(i + 1)
		setIndex(i)
		id = setTimeout(slider, delay)
	}

	// call start in useEffect
	const start = (from = -1) => {
		clearTimeout(id)
		i = from
		len = arrImgs.length

		return slider()
	}
	const stop = () => clearTimeout(id)
	return { start, stop }
}

export { useSlide }
