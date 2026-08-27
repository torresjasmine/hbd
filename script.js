const modalData = {
	letterModal: {
		kicker: 'try not to cringe', title: 'my dearest husband', content: '<p>Before I met you, I never really planned or thought much about the future. To be completely honest, I didn\'t even want one, and the thought of living that long genuinely scared me. But the moment you entered my life, tomorrow suddenly became something worth waiting for. For the first time ever, I find myself genuinely looking forward to the days ahead, because my mind is always filled with thoughts of you and the beautiful dreams we are building together. Knowing that you grew up in a difficult environment without the emotional support you deserved only makes me admire you more. I am so proud of the man you have chosen to become despite everything.</p><p>Thank you for being my safe place and my entire future. My love for you completely outruns my ability to explain them, and I promise to do everything in my power to keep you happy and help you reach for everything you want in this life. I will stand by your side, supporting your dreams and fighting for your happiness, until my very last breath.</p>'
	},
	loveModal: {
		kicker: 'read me pls', title: 'Things I love about you', content: '<ul style="list-style: none; padding: 0;"><li style="border: 3px solid #f4a3b8; padding: 10px; margin-bottom: 8px; border-radius: 8px; animation: fadeInUp 0.6s ease forwards; animation-delay: 0s;">The way you make me laugh when I am trying very hard not to.</li><li style="border: 3px solid #f4a3b8; padding: 10px; margin-bottom: 8px; border-radius: 8px; animation: fadeInUp 0.6s ease forwards; animation-delay: 0.15s;">Literally everything about you but I want to make a list.</li><li style="border: 3px solid #f4a3b8; padding: 10px; margin-bottom: 8px; border-radius: 8px; animation: fadeInUp 0.6s ease forwards; animation-delay: 0.3s;">How your face lights up (NEEERDDD) when you talk about something you love.</li><li style="border: 3px solid #f4a3b8; padding: 10px; margin-bottom: 8px; border-radius: 8px; animation: fadeInUp 0.6s ease forwards; animation-delay: 0.45s;">The person I get to be when I am with you.</li><li style="border: 3px solid #f4a3b8; padding: 10px; border-radius: 8px; animation: fadeInUp 0.6s ease forwards; animation-delay: 0.6s;">ur dih</li></ul>'
	},
	songsModal: {
		kicker: 'tap play to listen', title: 'A little mixtape of songs that reminds me of you', content: '<ul class="song-list"><li><b>Damned · Miguel</b><button class="song-play" data-uri="spotify:track:2ZCe5vjgNDAmoWe73C46nc" data-title="Damned" data-artist="Miguel" aria-label="Play Damned">▶</button></li><li><b>Soft Spot · keshi</b><button class="song-play" data-uri="spotify:track:2aL4lMGhWdPpyPL6COPou7" data-title="Soft Spot" data-artist="keshi" aria-label="Play Soft Spot">▶</button></li><li><b>Pretty Boy · The Neighbourhood</b><button class="song-play" data-uri="spotify:track:7IL8PSVwLOJxqYne6azxQv" data-title="Pretty Boy" data-artist="The Neighbourhood" aria-label="Play Pretty Boy">▶</button></li><li><b>Last Day On Earth · Green Day</b><button class="song-play" data-uri="spotify:track:5TpPSTItCwtZ8Sltr3vdzm" data-title="Last Day On Earth" data-artist="Green Day" aria-label="Play Last Day On Earth">▶</button></li></ul>'
	},
	reminderModal: {
		kicker: 'please remember', title: 'Things I want to remind you', content: '<ul><li>No matter what happens between us, my feelings for you never change. I love you so much, even when we have rough days or upset each other.</li><li>You never have to carry everything by yourself. I want you to always remember that I am right here for you, no matter what.</li><li>YOU R SO SO SO SO POGI I WANT TO BEMBANG U EVERYDAY</li></ul>'
	}
};

const backdrop = document.querySelector('#modalBackdrop');
const modalTitle = document.querySelector('#modalTitle');
const modalKicker = document.querySelector('#modalKicker');
const modalContent = document.querySelector('#modalContent');
const accessGate = document.querySelector('#accessGate');
const accessForm = document.querySelector('#accessForm');
const accessCode = document.querySelector('#accessCode');
const accessError = document.querySelector('#accessError');
const softSpotMessage = document.querySelector('#softSpotMessage');
const softSpotText = softSpotMessage.querySelector('p');
const prettyBoyMessage = document.querySelector('#prettyBoyMessage');
const prettyBoyText = prettyBoyMessage.querySelector('p');
const lastDayMessage = document.querySelector('#lastDayMessage');
const lastDayText = lastDayMessage.querySelector('p');
const playerTitle = document.querySelector('.track-info strong');
const playerArtist = document.querySelector('.track-info small');
const playButton = document.querySelector('#playButton');

accessForm.addEventListener('submit', (event) => {
	event.preventDefault();
	if (accessCode.value.trim().toLowerCase() !== 'i love you more') {
		accessError.hidden = false;
		accessCode.select();
		return;
	}
	accessError.hidden = true;
	accessGate.hidden = true;
	accessGate.setAttribute('aria-hidden', 'true');
	document.body.classList.add('is-unlocked');
});

accessCode.focus();

const countdownTarget = new Date('2026-08-28T00:00:00');
const countdown = {
	days: document.querySelector('#countdownDays'),
	hours: document.querySelector('#countdownHours'),
	minutes: document.querySelector('#countdownMinutes'),
	seconds: document.querySelector('#countdownSeconds')
};

const stardust = document.querySelector('#stardust');
const starColors = ['#d27591', '#8fc8d5', '#e6a46f', '#b7a9d6'];
for (let index = 0; index < 72; index += 1) {
	const star = document.createElement('span');
	star.className = 'stardust-star';
	star.style.setProperty('--top', `${Math.random() * 100}%`);
	star.style.setProperty('--left', `${Math.random() * 100}%`);
	star.style.setProperty('--size', `${1 + Math.random() * 3}px`);
	star.style.setProperty('--duration', `${2.2 + Math.random() * 3.8}s`);
	star.style.setProperty('--delay', `${Math.random() * -5}s`);
	star.style.setProperty('--star-color', starColors[index % starColors.length]);
	stardust.appendChild(star);
}

const dustColors = ['#d27591', '#8fc8d5', '#e6a46f'];
for (let index = 0; index < 28; index += 1) {
	const dust = document.createElement('span');
	dust.className = 'falling-dust';
	dust.style.setProperty('--left', `${Math.random() * 100}%`);
	dust.style.setProperty('--size', `${1 + Math.random() * 2.5}px`);
	dust.style.setProperty('--duration', `${7 + Math.random() * 8}s`);
	dust.style.setProperty('--delay', `${Math.random() * -14}s`);
	dust.style.setProperty('--drift', `${-45 + Math.random() * 90}px`);
	dust.style.setProperty('--dust-color', dustColors[index % dustColors.length]);
	stardust.appendChild(dust);
}

function updateCountdown() {
	const remaining = Math.max(0, countdownTarget.getTime() - Date.now());
	const totalSeconds = Math.floor(remaining / 1000);
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor((totalSeconds % 86400) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;
	countdown.days.textContent = String(days).padStart(2, '0');
	countdown.hours.textContent = String(hours).padStart(2, '0');
	countdown.minutes.textContent = String(minutes).padStart(2, '0');
	countdown.seconds.textContent = String(seconds).padStart(2, '0');
	if (!remaining) document.querySelector('.countdown-label').textContent = 'happy birthday, my love';
}

updateCountdown();
setInterval(updateCountdown, 1000);

let spotifyController;
let isPlaying = false;
let currentUri = 'spotify:track:1lORkxEMmsCZqhoxcmk3A3'; // Default track URI matching your iframe layout
let activeModal;
let prettyBoyTimer;
let lastDayTimer;
let softSpotTimer;

function hideSongEffects() {
	clearTimeout(softSpotTimer);
	clearTimeout(prettyBoyTimer);
	clearTimeout(lastDayTimer);
	[softSpotMessage, prettyBoyMessage, lastDayMessage].forEach((message) => {
		message.classList.remove('show');
		message.setAttribute('aria-hidden', 'true');
	});
}

function showPrettyBoyMessage() {
	clearTimeout(prettyBoyTimer);
	const message = "as long as I got you, i'm not afraid to die\ni'm alright";
	prettyBoyText.textContent = '';
	prettyBoyMessage.classList.add('show');
	prettyBoyMessage.setAttribute('aria-hidden', 'false');
	let characterIndex = 0;
	const typeNextCharacter = () => {
		if (characterIndex >= message.length) {
			prettyBoyTimer = setTimeout(() => {
				prettyBoyMessage.classList.remove('show');
				prettyBoyMessage.setAttribute('aria-hidden', 'true');
			}, 5000);
			return;
		}
		prettyBoyText.textContent += message[characterIndex];
		characterIndex += 1;
		prettyBoyTimer = setTimeout(typeNextCharacter, message[characterIndex - 1] === '\n' ? 700 : 155);
	};
	prettyBoyTimer = setTimeout(typeNextCharacter, 4000);
}

function showLastDayMessage() {
	clearTimeout(lastDayTimer);
	const message = 'my beating heart belongs to you..';
	lastDayText.textContent = '';
	lastDayMessage.classList.add('show');
	lastDayMessage.setAttribute('aria-hidden', 'false');
	let characterIndex = 0;
	const typeNextCharacter = () => {
		if (characterIndex >= message.length) {
			lastDayTimer = setTimeout(() => {
				lastDayMessage.classList.remove('show');
				lastDayMessage.setAttribute('aria-hidden', 'true');
			}, 5000);
			return;
		}
		lastDayText.textContent += message[characterIndex];
		characterIndex += 1;
		lastDayTimer = setTimeout(typeNextCharacter, 155);
	};
	lastDayTimer = setTimeout(typeNextCharacter, 20000);
}

// Helper function to sync modal list buttons with the current play state
function updateModalSongButtons() {
	document.querySelectorAll('.song-play').forEach((button) => {
		if (button.dataset.uri === currentUri && isPlaying) {
			button.textContent = '❚❚';
			button.setAttribute('aria-label', `Pause ${button.dataset.title}`);
		} else {
			button.textContent = '▶';
			button.setAttribute('aria-label', `Play ${button.dataset.title}`);
		}
	});
}

document.querySelectorAll('.love-card').forEach((card) => {
	card.addEventListener('click', () => {
		const data = modalData[card.dataset.modal];
		activeModal = card.dataset.modal;
		if (card.classList.contains('is-opening')) return;
		card.classList.add('is-opening');
		setTimeout(() => {
		modalTitle.textContent = data.title;
		modalKicker.textContent = data.kicker;
		modalContent.innerHTML = data.content;
		backdrop.hidden = false;
		document.querySelector('#closeModal').focus();
		
		// Immediately sync play/pause button labels inside the modal when opened
		if (card.dataset.modal === 'songsModal') {
			updateModalSongButtons();
		}
			card.classList.remove('is-opening');
		}, 560);
	});
});

modalContent.addEventListener('click', (event) => {
	const songButton = event.target.closest('.song-play');
	if (!songButton) return;
	if (songButton.dataset.title === 'Soft Spot') {
		softSpotMessage.style.setProperty('--characters', softSpotText.textContent.length);
		softSpotMessage.classList.remove('show');
		softSpotMessage.setAttribute('aria-hidden', 'false');
		void softSpotText.offsetWidth;
		softSpotMessage.classList.add('show');
		softSpotTimer = setTimeout(() => {
			softSpotMessage.classList.remove('show');
			softSpotMessage.setAttribute('aria-hidden', 'true');
		}, 10000);
	}
	if (songButton.dataset.title === 'Pretty Boy') showPrettyBoyMessage();
	if (songButton.dataset.title === 'Last Day On Earth') showLastDayMessage();
	if (!spotifyController) return;

	// If clicking the track that is already active, toggle its state
	if (currentUri === songButton.dataset.uri) {
		spotifyController.togglePlay();
		return;
	}

	// If clicking a brand new track
	spotifyController.loadUri(songButton.dataset.uri);
	spotifyController.play();
	currentUri = songButton.dataset.uri;
	
	playerTitle.textContent = songButton.dataset.title;
	playerArtist.textContent = songButton.dataset.artist;
});

function closeModal() {
	if (activeModal === 'songsModal') {
		hideSongEffects();
		currentUri = 'spotify:track:1lORkxEMmsCZqhoxcmk3A3';
		playerTitle.textContent = 'Nothing';
		playerArtist.textContent = 'Bruno Major';
		if (spotifyController) {
			spotifyController.loadUri(currentUri);
			spotifyController.play();
		}
	}
	activeModal = null;
	backdrop.hidden = true;
}
document.querySelector('#closeModal').addEventListener('click', closeModal);
backdrop.addEventListener('click', (event) => { if (event.target === backdrop) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });

let wishMessageTimer;
const wishMessage = document.querySelector('#wishMessage');

document.querySelector('#candleButton').addEventListener('click', () => {
	document.querySelector('#flame').classList.add('off');
	wishMessage.classList.add('show');
	clearTimeout(wishMessageTimer);
	wishMessageTimer = setTimeout(() => wishMessage.classList.remove('show'), 4000);
	const hearts = document.querySelector('#hearts');
	for (let index = 0; index < 42; index += 1) {
		const heart = document.createElement('span');
		heart.className = 'heart';
		heart.textContent = index % 3 === 0 ? '♡' : '♥';
		heart.style.setProperty('--left', `${Math.random() * 100}%`);
		heart.style.setProperty('--size', `${12 + Math.random() * 22}px`);
		heart.style.setProperty('--duration', `${2.5 + Math.random() * 2}s`);
		hearts.appendChild(heart);
		setTimeout(() => heart.remove(), 5000);
	}
});

window.onSpotifyIframeApiReady = (IFrameAPI) => {
	const iframe = document.querySelector('.music-player iframe');
	IFrameAPI.createController(iframe, { uri: currentUri }, (controller) => {
		spotifyController = controller;
		
		// The master state listener using Spotify's native variable structure
		controller.addListener('playback_update', (event) => {
			// Inverting 'isPaused' provides a reliable real-time boolean for tracking
			isPlaying = !event.data.isPaused; 
			
			// 1. Sync the primary UI player bar button
			playButton.textContent = isPlaying ? '❚❚' : '▶';
			
			// 2. Sync sub-buttons inside the playlist modal
			updateModalSongButtons();
		});
	});
};

// Primary control bar action handler
playButton.addEventListener('click', () => {
	if (!spotifyController) return;
	spotifyController.togglePlay();
});
