import React from 'react';
import Image from 'next/image';

import Linkedin from '../Assets/Icons/in.svg'
import GitHub from '../Assets/Icons/git.svg'
import Telegram from '../Assets/Icons/telegram.svg'

import styles from '../styles/Contacts.module.scss'

const Contacts = ({data}) => {

    return (
        <div className={styles.contacts + ' container'}>
            <p>Contacts</p>
            <span className={styles.contacts__links }>
                <a href={`${data.social_media_links?.Linkedin}`} target='_blank' rel="noreferrer">
                    <Image width='100%' height='100%'  src={Linkedin} alt="Social media icon" />
                </a>
                <a href={`${data.social_media_links?.GitHub}`} target='_blank' rel="noreferrer">
                    <Image width='100%' height='100%'  src={GitHub} alt="Social media icon" />
                </a>
                <a href={`${data.social_media_links?.Telegram}`} target='_blank' rel="noreferrer">
                    <Image width='100%' height='100%'  src={Telegram} alt="Social media icon" />
                </a>    
            </span>
            <span className={styles.contacts__contact}>
                <a href={`tel:+${data?.phone_num}`}>+{data?.phone_num}</a>
                <a href={`mailto:${data?.email}`}>{data?.email}</a>
            </span>
        </div>
    );
}

export default Contacts;
