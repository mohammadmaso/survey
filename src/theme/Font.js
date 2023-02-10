import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`

	@font-face {
	font-family: iranyekanFaNum;
	font-style: normal;
	font-weight: bold;
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebboldfanum.eot');
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebboldfanum.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/iranyekanFaNum/woff/iranyekanwebboldfanum.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/iranyekanFaNum/ttf/iranyekanwebboldfanum.ttf') format('truetype');
}

@font-face {
	font-family: iranyekanFaNum;
	font-style: normal;
	font-weight: 100;
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebthinfanum.eot');
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebthinfanum.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/iranyekanFaNum/woff/iranyekanwebthinfanum.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/iranyekanFaNum/ttf/iranyekanwebthinfanum.ttf') format('truetype');
}

@font-face {
	font-family: iranyekanFaNum;
	font-style: normal;
	font-weight: 300;
	src: url('/fonts/iranyekanFaNum/eot/iranyekanweblightfanum.eot');
	src: url('/fonts/iranyekanFaNum/eot/iranyekanweblightfanum.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/iranyekanFaNum/woff/iranyekanweblightfanum.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/iranyekanFaNum/ttf/iranyekanweblightfanum.ttf') format('truetype');
}

@font-face {
	font-family: iranyekanFaNum;
	font-style: normal;
	font-weight: normal;
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebregularfanum.eot');
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebregularfanum.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/iranyekanFaNum/woff/iranyekanwebregularfanum.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/iranyekanFaNum/ttf/iranyekanwebregularfanum.ttf') format('truetype');
}

@font-face {
	font-family: iranyekanFaNum;
	font-style: normal;
	font-weight: 500;
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebmediumfanum.eot');
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebmediumfanum.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/iranyekanFaNum/woff/iranyekanwebmediumfanum.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/iranyekanFaNum/ttf/iranyekanwebmediumfanum.ttf') format('truetype');
}

@font-face {
	font-family: iranyekanFaNum;
	font-style: normal;
	font-weight: 800;
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebextraboldfanum.eot');
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebextraboldfanum.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/iranyekanFaNum/woff/iranyekanwebextraboldfanum.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/iranyekanFaNum/ttf/iranyekanwebextraboldfanum.ttf') format('truetype');
}

@font-face {
	font-family: iranyekanFaNum;
	font-style: normal;
	font-weight: 850;
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebblackfanum.eot');
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebblackfanum.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/iranyekanFaNum/woff/iranyekanwebblackfanum.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/iranyekanFaNum/ttf/iranyekanwebblackfanum.ttf') format('truetype');
}

@font-face {
	font-family: iranyekanFaNum;
	font-style: normal;
	font-weight: 900;
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebextrablackfanum.eot');
	src: url('/fonts/iranyekanFaNum/eot/iranyekanwebextrablackfanum.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/iranyekanFaNum/woff/iranyekanwebextrablackfanum.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/iranyekanFaNum/ttf/iranyekanwebextrablackfanum.ttf') format('truetype');
}


        @font-face {
            font-family: peyda;
            font-style: normal;
            font-weight: bold;
            src: url('/fonts/PeydaWeb/eot/PeydaWeb-Bold.eot');
            src: url('/fonts/PeydaWeb/eot/PeydaWeb-Bold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                url('/fonts/PeydaWeb/woff/PeydaWeb-Bold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                url('/fonts/PeydaWeb/woff2/PeydaWeb-Bold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                url('/fonts/PeydaWeb/ttf/PeydaWeb-Bold.ttf') format('truetype');
        }

        @font-face {
            font-family: peyda;
            font-style: normal;
            font-weight: normal;
            src: url('/fonts/PeydaWeb/eot/PeydaWeb-Regular.eot');
            src: url('/fonts/PeydaWeb/eot/PeydaWeb-Regular.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                url('/fonts/PeydaWeb/woff/PeydaWeb-Regular.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                url('/fonts/PeydaWeb/woff2/PeydaWeb-Regular.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                url('/fonts/PeydaWeb/ttf/PeydaWeb-Regular.ttf') format('truetype');
        }


      /**
*
*	Name:			IRANYekan Font
*	Version:			3.3
*	Author:			Moslem Ebrahimi (moslemebrahimi.com)
*	Created on:		Sep 17, 2020
*	Updated on:		Sep 17, 2020
*	Website:			http://fontiran.com
*	Copyright:		Commercial/Proprietary Software
--------------------------------------------------------------------------------------
فونت ایران یکان یک نرم افزار مالکیتی محسوب می شود. جهت آگاهی از قوانین استفاده از این فونت ها لطفا به وب سایت (فونت ایران دات کام) مراجعه نمایید
--------------------------------------------------------------------------------------
IRANYekan fonts are considered a proprietary software. To gain information about the laws regarding the use of these fonts, please visit www.fontiran.com 
--------------------------------------------------------------------------------------
This set of fonts are used in this project under the license: (.....)
--------------------------------------------------------------------------------------
*	
**/
@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: bold;
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebBold.eot');
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebBold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/IranyekanWeb/woff/IRANYekanWebBold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/IranyekanWeb/woff2/IRANYekanWebBold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('/fonts/IranyekanWeb/ttf/IRANYekanWebBold.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 100;
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebThin.eot');
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebThin.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/IranyekanWeb/woff/IRANYekanWebThin.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/IranyekanWeb/woff2/IRANYekanWebThin.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('/fonts/IranyekanWeb/ttf/IRANYekanWebThin.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 300;
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebLight.eot');
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebLight.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/IranyekanWeb/woff/IRANYekanWebLight.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/IranyekanWeb/woff2/IRANYekanWebLight.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('/fonts/IranyekanWeb/ttf/IRANYekanWebLight.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: normal;
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebRegular.eot');
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebRegular.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/IranyekanWeb/woff/IRANYekanWebRegular.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/IranyekanWeb/woff2/IRANYekanWebRegular.woff2') format('woff2'), /* FF39+,Chrome36+, Opera24+*/
		 url('/fonts/IranyekanWeb/ttf/IRANYekanWebRegular.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 500;
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebMedium.eot');
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebMedium.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/IranyekanWeb/woff/IRANYekanWebMedium.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/IranyekanWeb/woff2/IRANYekanWebMedium.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('/fonts/IranyekanWeb/ttf/IRANYekanWebMedium.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 800;
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebExtraBold.eot');
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebExtraBold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/IranyekanWeb/woff/IRANYekanWebExtraBold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/IranyekanWeb/woff2/IRANYekanWebExtraBold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('/fonts/IranyekanWeb/ttf/IRANYekanWebExtraBold.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 850;
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebBlack.eot');
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebBlack.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/IranyekanWeb/woff/IRANYekanWebBlack.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/IranyekanWeb/woff2/IRANYekanWebBlack.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('/fonts/IranyekanWeb/ttf/IRANYekanWebBlack.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 900;
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebExtraBlack.eot');
	src: url('/fonts/IranyekanWeb/eot/IRANYekanWebExtraBlack.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('/fonts/IranyekanWeb/woff/IRANYekanWebExtraBlack.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('/fonts/IranyekanWeb/woff2/IRANYekanWebExtraBlack.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('/fonts/IranyekanWeb/ttf/IRANYekanWebExtraBlack.ttf') format('truetype');
}
      `}
  />
)

export default Fonts