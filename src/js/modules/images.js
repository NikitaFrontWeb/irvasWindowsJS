import scroll from "./scroll";

const images = () => {
    const img = document.createElement('img'),
          imgDiv = document.createElement('div'),
          sectionWork = document.querySelector('.works'),
          scrollWidth = scroll();

    sectionWork.appendChild(imgDiv);
    imgDiv.appendChild(img);
    imgDiv.style.display = 'none';
    imgDiv.classList.add('popup');
    imgDiv.style.alignItems = 'center';
    imgDiv.style.justifyContent = 'center';

    sectionWork.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if (target && target.classList.contains('preview')) {
            imgDiv.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollWidth}px`;
            
            const path = target.parentNode.getAttribute('href');
            img.setAttribute('src', path);
        }

        if (target && target.classList.contains('popup')) {
            imgDiv.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });
};

export default images;