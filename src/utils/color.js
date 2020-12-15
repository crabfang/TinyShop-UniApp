export default {
	hexToRgbWidthOp(hex, op = 1) {
	    const color = [];
	    const rgb = [];
	
	    hex = hex.replace(/#/, '');
	
	    if (hex.length === 3) {
	        const tmp = [];
	        for (let i = 0; i < 3; i++) {
	            tmp.push(hex.charAt(i) + hex.charAt(i));
	        }
	        hex = tmp.join('');
	    }
	
	    for (let i = 0; i < 3; i++) {
	        color[i] = '0x' + hex.substr(i * 2, 2);
	        rgb.push(parseInt(Number(color[i])));
	    }
	
	    return `rgba(${rgb.join(',')}, ${op})`;
	}
}