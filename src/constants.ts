export const texTextToReplace = 'YourTextHere'
export const tempFolder = './temp'

export const templateTextFile = `
\\documentclass[preview]{standalone}

\\usepackage[english]{babel}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{dsfont}
\\usepackage{setspace}
\\usepackage{tipa}
\\usepackage{relsize}
\\usepackage{textcomp}
\\usepackage{mathrsfs}
\\usepackage{calligra}
\\usepackage{wasysym}
\\usepackage{ragged2e}
\\usepackage{physics}
\\usepackage{xcolor}
\\usepackage{microtype}
\\DisableLigatures{encoding = *, family = * }
%\\usepackage[UTF8]{ctex}
\\linespread{1}

\\begin{document}

YourTextHere

\\end{document}
`
export const templateTexFile = templateTextFile.replace(texTextToReplace, '\\begin{align*}\n' + texTextToReplace + '\n\\end{align*}')
