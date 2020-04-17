import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GetThemeColor from "../../utils/GetThemeColor"


import * as S from "./styled"

import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { position, description, title },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          position
          description
          title
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/" cover direction="left" bg={GetThemeColor()} duration={0.6}>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
