import React from 'react';
import PropTypes from 'prop-types';

import { getValidIndex } from '../../../util/getValidIndex';
import { Container, Navigation, Player, Svg, Dots, Dot } from './styles';

class Carousel extends React.Component {
	constructor(props) {
		super(props);

		const { className, playControl, autoPlay, delay } = props;

		this.state = {
			currentIndex: 0,
			idDelay: null,
			isDelayed: true,
			idTransition: null,
			isTransitioned: true,
			isPlaying: autoPlay,
			playControl,

			exit: null,
			enter: null,
			initial: null
		};

		this.classNames = {
			initial: `${className}-initial`,
			enter: `${className}-enter`,
			exit: `${className}-exit`
		};

		this.items = [];
		this.delay = delay * 1000;

		/**
		 * Add carousel item to carousel items
		 * @param {String} item - carousel item
		 */
		this.addItem = item => {
			item && this.items.push(item);
		};
	}

	componentDidMount() {
		this.getIndex = getValidIndex(this.items.length);

		const { currentIndex, isPlaying } = this.state;

		this.items.forEach(item => item.classList.add(this.props.className));

		if (this.items.length === 1) {
			const current = this.items[this.getIndex(currentIndex)];
			current.classList.add(this.cls.enter);
			this.setState({ playControl: false, isDelayed: false });
			return;
		}

		const exit = this.items[this.getIndex(currentIndex - 1)];
		const enter = this.items[this.getIndex(currentIndex)];
		const initial = this.items[this.getIndex(currentIndex + 1)];

		this.addClass(exit, 'exit');
		this.addClass(enter, 'enter');
		this.addClass(initial, 'initial');

		this.setState({ exit, enter, initial });

		isPlaying && this.play();
	}

	componentDidUpdate() {
		const { isDelayed, isTransitioned, isPlaying } = this.state;

		if (isDelayed && isTransitioned && isPlaying) this.play();
	}

	play = () => {
		const idDelay = setTimeout(() => this.nextSlide(), this.delay);
		this.setState({ idDelay, isDelayed: false });
	};

	nextSlide = () => {
		this.changeExit();
		this.changeEnter();
		this.changeInitial();

		this.setState(({ currentIndex }) => ({
			currentIndex: this.getIndex(currentIndex + 1),
			isTransitioned: false,
			isDelayed: true
		}));

		setTimeout(
			() => this.setState({ isTransitioned: true }),
			this.props.duration
		);
	};

	changeExit = () => {
		const { exit, enter } = this.state;

		this.removeClass(exit, 'exit');
		this.replaceClass(enter, 'enter', 'exit');
		this.setState({ exit: enter });
  };
	changeEnter = () => {
		const { initial } = this.state;

		this.replaceClass(initial, 'initial', 'enter');
		this.setState({ enter: initial });
	};
	changeInitial = () => {
		const { currentIndex } = this.state;
		const initial = this.items[this.getIndex(currentIndex + 2)];

		this.addClass(initial, 'initial');
		this.setState({ initial });
	};

	addClass = (item, cls) => {
		item.classList.add(this.classNames[cls]);
	};
	removeClass = (item, cls) => {
		item.classList.remove(this.classNames[cls]);
	};
	replaceClass = (item, prevCls, nextCls) => {
		item.classList.replace(this.classNames[prevCls], this.classNames[nextCls]);
	};

	handlePlayerClick = () => {
		this.setState(({ idDelay, isTransitioned, isPlaying }) => {
			if (!isPlaying) {
				return isTransitioned ? { isPlaying: true } : null;
			}
			clearInterval(idDelay);
			return { isPlaying: !isPlaying, isDelayed: true };
		});
	};

	render() {
		const { children, duration, navigation } = this.props;
		const { currentIndex, isPlaying, playControl } = this.state;

		return (
			<Container duration={duration}>
				{children(this.addItem)}

				<Navigation>
					{navigation ? (
						<Dots>
							{Array(this.items.length)
								.fill('')
								.map((_, i) => (
									<Dot key={i} active={currentIndex === i}></Dot>
								))}
						</Dots>
					) : null}

					{playControl ? (
						<Player onClick={this.handlePlayerClick}>
							<Svg>
								{isPlaying ? (
									<path d="M0 0h15v60H0zM25 0h15v60H25z" />
								) : (
									<path d="M0 0l50 30L0 60z" />
								)}
							</Svg>
						</Player>
					) : null}
				</Navigation>
			</Container>
		);
	}
}

Carousel.defaultProps = {
	delay: 3,
	duration: 1,
	autoPlay: false,
	playControl: false,
	navigation: false
};

Carousel.propTypes = {
	delay: PropTypes.number,
	transition: PropTypes.number,
	children: PropTypes.func.isRequired,
	className: PropTypes.string,
	autoPlay: PropTypes.bool,
	playControl: PropTypes.bool,
	navigation: PropTypes.bool
};

export default Carousel;