import Navbar from '../Navbar/Navbar'
import { useEffect } from "react";
import './style.css'
import logo from '../../img/logo.svg'
import pkg from '../../../package.json'

export const Header = () => {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.ad-header');
        const scrollTop = window.scrollY;
        scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

  return (    
    <header className='ad-header'>
      <div className='container'>
        <div className='logo'>
            <img src={ logo } alt={ pkg.name } />
            <svg xmlns="http://www.w3.org/2000/svg"><path d="M56.904 14.411c0 8.483-5.48 13.78-14.277 13.78h-7.886V.563h7.886C51.424.545 56.904 5.86 56.904 14.411zm-4.398-.017c0-5.861-3.814-9.529-9.897-9.529h-3.538v19.007h3.59c6.047 0 9.845-3.65 9.845-9.478zM76.112 28.191l-7.457-10.695h-3.402v10.695h-4.346L60.89.563h8.608c5.154 0 9.38 3.96 9.38 8.878 0 3.565-2.302 6.667-5.48 7.696l8.058 11.054h-5.344zm-6.511-14.294c2.611.017 4.793-2.091 4.793-4.558 0-2.572-2.216-4.474-4.793-4.474h-4.365v9.032h4.365zM83.053 14.411c0-7.884 6.425-14.328 14.312-14.328 7.869 0 14.328 6.444 14.328 14.328 0 7.815-6.459 14.225-14.345 14.225-7.87 0-14.295-6.41-14.295-14.225zm24.242-.034c0-5.467-4.484-9.923-9.947-9.923-5.464 0-9.914 4.456-9.914 9.923 0 5.433 4.45 9.873 9.914 9.873 5.463-.001 9.947-4.44 9.947-9.873zM115.679.563h4.347v27.628h-4.347V.563zM147.515 14.411c0 8.483-5.48 13.78-14.277 13.78h-7.886V.563h7.886c8.797-.018 14.277 5.296 14.277 13.848zm-4.398-.017c0-5.861-3.814-9.529-9.897-9.529h-3.54v19.007h3.591c6.048 0 9.846-3.65 9.846-9.478zM.263 34.247c0-2.004 1.667-3.672 3.67-3.672.918.009 1.809.43 2.456 1.08l-.47.632c-.515-.526-1.234-.894-2.018-.894-1.437 0-2.825 1.239-2.825 2.852 0 1.61 1.375 2.844 2.838 2.844.806 0 1.494-.38 2.008-.884l.465.645c-.593.589-1.396 1.048-2.451 1.048C1.952 37.9.263 36.267.263 34.247zM14.404 34.247a3.682 3.682 0 0 1 3.67-3.672 3.683 3.683 0 0 1 3.676 3.672c0 2.008-1.654 3.653-3.68 3.653-2.012 0-3.666-1.647-3.666-3.653zm6.53-.005a2.867 2.867 0 0 0-2.864-2.857 2.862 2.862 0 0 0-2.851 2.857 2.854 2.854 0 0 0 2.85 2.844c1.58 0 2.865-1.279 2.865-2.844zM34.739 37.807l-1.995-2.782H31.41v2.782h-.806l-.005-7.129h2.11c1.325 0 2.407 1.017 2.407 2.273 0 .924-.634 1.72-1.503 1.982l2.124 2.875h-.997v-.001zm-2.005-3.46c.852 0 1.551-.644 1.551-1.414 0-.822-.71-1.459-1.55-1.459h-1.33v2.87l1.33.004zM44.282 30.677h2.266c1.383 0 2.514 1.035 2.514 2.3 0 1.212-1.13 2.198-2.514 2.198H45.09v2.632h-.806v-7.13h-.002zm3.973 2.291c0-.822-.766-1.494-1.707-1.494H45.09v2.905l1.458.005c.94.004 1.707-.633 1.707-1.416zM57.382 34.247a3.682 3.682 0 0 1 3.67-3.672 3.683 3.683 0 0 1 3.675 3.672c0 2.008-1.654 3.653-3.68 3.653-2.011 0-3.665-1.647-3.665-3.653zm6.53-.005a2.867 2.867 0 0 0-2.864-2.857 2.862 2.862 0 0 0-2.85 2.857 2.854 2.854 0 0 0 2.85 2.844c1.578 0 2.864-1.279 2.864-2.844zM77.716 37.807l-1.994-2.782h-1.335v2.782h-.806l-.005-7.129h2.11c1.324 0 2.406 1.017 2.406 2.273 0 .924-.633 1.72-1.502 1.982l2.124 2.875h-.998v-.001zm-2.004-3.46c.851 0 1.551-.644 1.551-1.414 0-.822-.71-1.459-1.551-1.459h-1.33v2.87l1.33.004zM91.92 36.635h-3.902l-.523 1.172h-.873l3.303-7.24h.088l3.308 7.24h-.878l-.524-1.172zm-.311-.7-1.636-3.666-1.64 3.666h3.276zM105.444 31.473h-2.071v6.333h-.806v-6.333h-2.08v-.796h4.957v.796zM114.141 30.677h.807v7.129h-.807v-7.13zM123.796 34.247a3.682 3.682 0 0 1 3.671-3.672 3.683 3.683 0 0 1 3.675 3.672c0 2.008-1.654 3.653-3.68 3.653-2.012 0-3.666-1.647-3.666-3.653zm6.531-.005a2.867 2.867 0 0 0-2.864-2.857 2.863 2.863 0 0 0-2.851 2.857 2.854 2.854 0 0 0 2.851 2.844c1.578 0 2.864-1.279 2.864-2.844zM145.735 30.66v7.258h-.039l-4.899-5.426v5.325h-.807v-7.249h.045l4.894 5.422v-5.329h.806v-.001zM25.713 28.151h-1.306c-.832-3.993-4.521-7.173-8.67-7.173-4.157 0-7.854 3.194-8.675 7.173H5.764c.388-2.273 1.56-4.308 3.221-5.81 1.802-1.627 4.177-2.628 6.753-2.628 2.569 0 4.94.997 6.74 2.618 1.67 1.503 2.847 3.542 3.235 5.82z"/><path d="M27.6 28.151h-1.285c-.07-.43-.166-.852-.287-1.266a10.746 10.746 0 0 0-1.672-3.358 11.021 11.021 0 0 0-2.365-2.349 10.596 10.596 0 0 0-6.253-2.06c-2.323 0-4.494.772-6.267 2.07a11.008 11.008 0 0 0-2.407 2.415 10.619 10.619 0 0 0-1.894 4.495l-.023.053H3.875c.377-2.643 1.644-5.028 3.482-6.834a12.106 12.106 0 0 1 2.966-2.148 11.8 11.8 0 0 1 5.415-1.317c1.934 0 3.771.474 5.4 1.31a12.227 12.227 0 0 1 2.957 2.132c1.851 1.81 3.127 4.203 3.505 6.857z"/><path d="m16.765 5.48-.516-1.227H15.22l-.214.507-.005.014-5.31 12.593-.813 1.93c.573-.378 1.178-.71 1.808-.993a12.332 12.332 0 0 1 5.05-1.084c1.78 0 3.486.386 5.035 1.077.622.279 1.22.605 1.788.977L16.765 5.479zM15.74 15.953c-1.519 0-2.986.252-4.362.717l4.325-10.26.007-.015 2.749 6.427.026.062c.928 2.174 1.58 3.714 1.599 3.779v.001a13.613 13.613 0 0 0-4.344-.711z"/><path d="m20.083 16.664-1.599-3.779c.928 2.174 1.582 3.714 1.599 3.779zM18.018 3.62h-.02l-.515-1.267h.002l.533 1.267z" /><path d="m19.688 2.763-.172-.409-.803-1.9h-5.99L1.063 28.153h2.175c.058-.428.139-.85.242-1.266a12.577 12.577 0 0 1 1.96-4.264A12.99 12.99 0 0 1 7.911 20l.915-2.17 5.84-13.84.005-.012.151-.36h1.84l.265.634 6.616 15.733c.93.742 1.756 1.612 2.45 2.578a12.524 12.524 0 0 1 2.243 5.586h2.175L19.688 2.763zm4.88 16.413L18.018 3.62h-.02l-.515-1.267h-3.49l-.007.018-.004.01-7.095 16.813c-.413.344-.804.712-1.175 1.1L13.558 1.72h4.323l.267.633.535 1.267 6.99 16.576c-.35-.359-.72-.7-1.105-1.02z" /><path d="M18.018 3.62h-.02l-.515-1.267h.002l.533 1.267zM20.083 16.664 15.703 6.41l.006-.014 2.749 6.427.026.062c.928 2.174 1.582 3.714 1.599 3.779z"/></svg>
        </div>
        <Navbar></Navbar>
        <div className='btn-right'>
          <a href={'/'} className='btn btn-primary'>Get started</a>
        </div>
      </div>
    </header>    
  )
}

export default Header;