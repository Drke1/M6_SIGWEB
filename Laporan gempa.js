// This earthquake data is sourced from New Zealand’s Geonet
// site over a date range that covers a period of reasonable
// activity in July/August 2013.
var quakePoints = [
    [-0.55, 119.72334, 3.93],
    [-0.81, 122.25835, 2.97],
    [-0.17, 119.66547, 3.53],
    [-1.5, 120.24516, 4.07],
    [-1.05, 120.01702, 2.87],
    [-0.46, 119.95538, 2.5],
    [-1.8, 119.92857, 3.65],
    [-1.53, 119.86105, 3.2],
    [0.09, 119.60335, 3.53],
    [-1.23, 119.70152, 3.27],
    [-0.89, 119.97507, 3.61],
    [-0.55, 119.8536, 3.47],
    [-1.23, 119.91275, 3.54],
    [-2, 120.68569, 3.76],
    [-0.3, 119.69196, 3.55],
    [-0.93, 119.83254, 3.44],
    [0, 119.54617, 4.28],
    [-1.55, 120.29223, 3.84],
    [-1.42, 119.95512, 3.85],
    [-1.37, 120.6217, 3.54],
    [-0.09, 119.48352, 3.46],
    [-1.28, 119.97944, 3.33],
    [0.18, 119.41985, 3.07],
    [-0.19, 120.48644, 2.85],
    [-1.82, 119.74279, 3.41],
    [-1.76, 121.23713, 2.84],
    [-0.06, 119.5889, 3.43],
    [-1.12, 119.707, 3.63],
    [0.29, 119.14864, 3.78],
    [-2.3, 121.09571, 3.35],
    [-1.43, 120.13155, 3.44],
    [-1.29, 120.21069, 3.1],
    [-0.01, 119.72395, 2.98],
    [0.12, 119.74279, 3.69],
    [0.01, 119.7094, 3.67],
    [-1.39, 119.905, 3.33],
    [-0.87, 119.9213, 3.17],
    [-1.93, 120.22707, 3.34],
    [-1.29, 120.01313, 3.55],
    [-1.52, 120.16852, 3.69],
    [-1.38, 120.00202, 3.83],
    [-1.43, 120.12183, 4.03],
    [-0.31, 119.6407, 4.29],
    [0.37, 121.81687, 2.58],
    [-1.65, 119.89607, 3.44],
    [-0.59, 119.86735, 3.48],
    [-1.66, 120.38812, 3.88],
    [-0.3, 119.76601, 3.29],
    [0.18, 119.69488, 4.53],
    [-0.93, 119.79673, 3.68],
    [-0.64, 120.32491, 3.15],
    [-0.05, 120.18913, 3.49],
    [-1.41, 120.40146, 3.83],
    [0.23, 119.23215, 3.48],
    [-0.33, 118.74647, 4.3],
    [-1.54, 120.38706, 3.18],
    [-0.36, 120.03992, 3.57],
    [-1.24, 120.3076, 4.64],
    [-1.2, 120.43731, 4.61],
    [-1.24, 120.32846, 4.55],
    [-1.32, 120.42329, 3.19],
    [-1.33, 120.67777, 4.46],
    [-2.89, 121.23875, 3.75],
    [-1.31, 120.50193, 3.3],
    [-1.39, 120.59333, 4.43],
    [-1.26, 120.51109, 4.67],
    [-2.26, 121.14002, 3.18],
    [-0.51, 119.85834, 3.13],
    [0.15, 119.65115, 3.36],
    [-1.36, 120.03427, 3.35],
    [-0.13, 119.84386, 3.78],
    [-1.02, 119.89529, 3.88],
    [-1, 120.03506, 3.76],
    [-1.51, 120.35548, 3.66],
    [0.22, 119.21899, 4.21],
    [-0.68, 119.8597, 3.15],
    [-1.83, 119.89319, 3.49],
    [-0.46, 120.03042, 3.05],
    [0.18, 119.3937, 3.91],
    [-2.29, 120.90933, 3.59],
    [-1.39, 120.05113, 3.02],
    [-1.74, 120.36089, 3.1],
    [-1.52, 120.20835, 3.26],
    [-1.3, 120.16006, 3.86],
    [0.18, 119.3453, 3.48],
    [-0.49, 118.87729, 3.94],
    [-1.44, 120.05461, 3.71],
    [-1.32, 120.27797, 3.13],
    [-2.22, 120.93201, 2.95],
    [-1.2, 119.81776, 3.04],
    [-0.21, 119.50735, 3.62],
    [-1.27, 120.33767, 3.37],
    [-0.09, 119.81592, 4.19],
    [0.02, 119.49845, 4.07],
    [-1.43, 120.03386, 4.38],
    [-1.4, 120.07345, 3.28],
    [-0.3, 119.77503, 3.32],
    [-0.26, 119.61334, 3.48],
    [-1.55, 120.24822, 3.11],
    [-0.05, 119.39909, 3.63],
    [0.26, 119.30292, 3.23],
    [-0.8, 120.03977, 3.6],
    [-1.47, 120.05489, 4.38],
    [-0.8, 119.62332, 3.44],
    [-1.64, 119.73107, 3.53],
    [-2.24, 120.90616, 4.58],
    [-1.66, 119.80299, 3.84],
    [-0.96, 119.97354, 4.19],
    [-0.9, 119.95674, 3.83],
    [-0.5, 119.53346, 3.7],
    [-2.32, 120.91354, 3.4],
    [-2.61, 120.46918, 2.9],
    [-1.61, 120.34887, 4.41],
    [-2.31, 120.91365, 4.46],
    [-2.3, 120.95876, 4.69],
    [-2.31, 119.90532, 4.55],
    [0.28, 119.2407, 4.57],
    [-1.35, 119.76234, 3.34],
    [-1.05, 119.94838, 4.36],
    [-2.79, 119.64491, 3.56],
    [-1.07, 119.72095, 3.17],
    [-0.83, 119.91248, 3.81],
    [0.22, 119.80419, 3.9],
    [-1.23, 120.17148, 3.84],
    [-0.11, 119.76598, 3.29],
    [0, 119.83974, 3.12],
    [-0.22, 119.90356, 3.61],
    [-1.35, 119.99883, 3.36],
    [-0.03, 119.78885, 3.8],
    [-1.04, 119.97633, 4.81],
    [-0.21, 119.61306, 3.65],
    [-0.07, 119.51517, 3.09],
    [-0.6, 119.98064, 3.81],
    [-1.64, 120.04279, 4.01],
    [-1.24, 120.03941, 3.58],
    [-1.35, 119.92902, 3.18],
    [-0.42, 121.49757, 2.48],
    [-0.85, 120.19164, 2.98],
    [-0.51, 121.1946, 2.72],
    [-1.82, 119.77779, 3.11],
    [0.2, 119.40245, 3.88],
    [0.07, 119.78645, 2.83],
    [-0.2, 119.77844, 3.34],
    [0.07, 119.65189, 3.42],
    [-0.64, 120.08883, 2.93],
    [-0.43, 119.77916, 3.23],
    [-1.46, 120.19482, 3.69],
    [-1.39, 119.47911, 3.33],
    [-1.27, 119.29775, 3.6],
    [-0.4, 120.07339, 2.9],
    [-1.98, 121.07548, 4.67],
    [-0.16, 119.69789, 3.05],
    [-1.39, 120.18664, 4.04],
    [-0.56, 119.75265, 4.56],
    [-0.46, 119.67059, 2.64],
    [-0.08, 119.83293, 3.91],
    [-1.59, 120.19182, 5.49],
    [-1.42, 119.93653, 3.31],
    [-0.66, 119.42357, 3.5],
    [-0.08, 119.82269, 3.25],
    [-1.4, 119.81772, 3.22],
    [0.02, 119.52543, 4.1],
    [-2, 121.2123, 3.22],
    [-1.27, 120.31879, 3.6],
    [-0.03, 119.25912, 3.22],
    [-0.31, 119.75034, 3.26],
    [-1.22, 120.21125, 3.13],
    [-0.55, 120.1524, 2.81],
    [-1.62, 120.20901, 3.27],
    [-2.6, 121.61671, 3.55],
    [-0.61, 119.86422, 5.33],
    [0.01, 119.94402, 3.54],
    [-0.51, 119.59732, 3.13],
    [0.16, 119.64233, 3.61],
    [-0.04, 119.85575, 2.83],
    [-1.31, 119.76089, 3.36],
    [0.3, 119.95807, 2.69],
    [-0.06, 119.37227, 3.62],
    [-0.52, 120.12075, 2.94],
    [-2.24, 121.12546, 3.41],
    [0.24, 119.56679, 2.84],
    [-1.56, 120.47295, 2.92],
    [-1.66, 120.33755, 3.26],
    [-0.63, 119.74348, 3.14],
    [-1.15, 120.01018, 3.71],
    [-1.32, 120.07961, 4.68],
    [-0.23, 119.50071, 4.05],
    [-0.12, 119.62038, 3.92],
    [-1.35, 119.89693, 3],
    [-1.01, 119.63527, 3.3],
    [-0.57, 119.85421, 5.08],
    [-0.65, 119.94469, 3.97],
    [-0.5, 119.9176, 3.88],
    [-1.24, 119.39109, 3.68],
    [-0.2, 119.73939, 3.36],
    [0.08, 119.65211, 3.52],
    [-1.25, 119.96027, 3.7],
    [-0.78, 119.74134, 3.36],
    [-0.32, 119.4, 3.61],
    [-0.42, 119.39465, 3.07],
    [0.2, 119.81306, 2.94],
    [-0.61, 119.95748, 4.04],
    [0.15, 119.49628, 3.05],
    [-0.16, 119.54073, 2.96],
    [0, 119.46582, 3.28],
    [-1.49, 120.06944, 3.45],
    [-3.43, 119.11713, 3.44],
    [-0.6, 119.65648, 3.03],
    [-0.04, 119.53791, 3.11],
    [0.05, 119.89582, 2.72],
    [0.19, 119.54028, 3.01],
    [-0.01, 119.67911, 3.75],
    [-1.48, 119.95022, 3.25],
    [0.06, 119.72284, 3.09],
    [-0.39, 119.89376, 3.2],
    [-0.25, 119.82436, 3.21],
    [-0.28, 119.50567, 3.36],
    [-2.37, 120.89967, 3.25],
    [-0.96, 120.15325, 3.53],
    [0.15, 119.53981, 3.36],
    [-0.01, 119.62781, 5.24],
    [-0.92, 119.68348, 3.21],
    [-0.16, 119.8238, 2.76],
    [-0.03, 119.66785, 2.73],
    [-0.43, 120.32047, 3.07],
    [0.01, 119.82084, 3.33],
    [-0.72, 119.95785, 3.88],
    [-0.76, 119.95113, 3.72],
    [-1.09, 119.67856, 3.92],
    [-0.85, 120.2692, 3.26],
    [-1.5, 119.71767, 3.71],
    [-0.14, 120.10546, 3.6],
    [-1.2, 119.98109, 3.87],
    [-1.31, 120.00029, 3.37],
    [-1.51, 120.26894, 3.84],
    [-1.49, 120.10332, 3.57],
    [0.04, 119.70568, 3.85],
    [-1.27, 120.10836, 3.87],
    [-1.36, 120.16366, 3.55],
    [-0.89, 120.33534, 3.15],
    [-0.84, 119.90644, 3.25],
    [-0.53, 119.72202, 3.48],
    [-1.54, 120.07423, 3.47],
    [-1.53, 119.97046, 3.68],
    [-1.47, 119.92111, 3.52],
    [-0.5, 119.78793, 3.6],
    [-0.48, 119.96951, 3.52],
    [-0.16, 119.44318, 3.94],
    [-1.99, 120.13242, 3.57],
    [-0.14, 119.64391, 3.52],
    [-0.13, 119.69189, 3.52],
    [-1.34, 120.00927, 4.35],
    [-1.32, 120.18719, 4.8],
    [-1.58, 120.13727, 3.72],
    [-0.04, 119.48746, 4.08],
    [-1.35, 119.86886, 3.56],
    [0.07, 119.75423, 3.48],
    [-1.29, 119.99347, 3.54],
    [-0.89, 119.60063, 3.37],
    [-1.38, 120.10889, 3.52],
    [-1.46, 120.20662, 3.72],
    [-0.31, 119.86239, 3.46],
    [0.01, 119.76051, 4.22],
    [-1.43, 119.96724, 3.47],
    [-1.44, 120.0984, 3.75],
    [-1.49, 120.43947, 3.34],
    [-1.62, 120.07136, 3.32],
    [-1.43, 120.56701, 3.14],
    [0, 119.70248, 3.07],
    [-1.6, 120.25068, 3.14],
    [-0.78, 119.90537, 3.27],
    [-0.12, 119.61996, 3.19],
    [-1.41, 119.83885, 3.54],
    [0.11, 119.56925, 4.27],
    [-0.01, 119.51068, 3.67],
    [0.27, 119.43343, 3.61],
    [-1.64, 120.23096, 4.39],
    [-1.66, 120.06501, 3.54],
    [-1.54, 120.10196, 3.84],
    [0.05, 119.66939, 4.09],
    [-1.42, 120.00809, 3.75],
    [-0.92, 120.0589, 3.59],
    [-0.27, 122.33618, 3.03],
    [-0.73, 119.74991, 3.46],
    [-0.02, 119.592, 3.51],
    [0.08, 119.4843, 2.82],
    [-0.27, 119.65863, 3.07],
    [-0.35, 119.98336, 4.02],
    [-0.41, 119.99111, 4.07],
    [-0.17, 119.51461, 3.4],
    [-1.34, 119.91264, 3.47],
    [-1.56, 120.09921, 3.58],
    [-1.28, 120.25212, 3.38],
    [-0.5, 119.8914, 3.81],
    [-1.5, 120.04828, 4.3],
    [-1.21, 120.12501, 3.91],
    [-1.48, 120.08552, 4.72],
    [-2.26, 120.98884, 3.79],
    [-0.17, 119.68436, 3.37],
    [-0.31, 119.70818, 3.53],
    [-1.36, 119.56376, 4.15],
    [-1.26, 120.1319, 3.91],
    [-1.46, 120.27302, 3.3],
    [-0.96, 119.74773, 3.11],
    [0.02, 119.43633, 4.09],
    [-1.24, 120.08698, 4.03],
    [-1.19, 120.0831, 4.34],
    [-0.06, 119.81377, 3.66],
    [-1.29, 119.96142, 4.11],
    [-1.51, 120.07095, 3.88],
    [-1.5, 120.21623, 3.16],
    [-0.38, 119.84444, 3.5],
    [-1.32, 120.09667, 3.88],
    [-0.13, 119.77617, 3.9],
    [-1.02, 119.68037, 3.68],
    [-1.52, 120.10329, 3.88],
    [-1.54, 120.14675, 4.4],
    [-0.56, 119.9693, 3.46],
    [-0.14, 119.38952, 3.81],
    [0.04, 119.8411, 3.37],
    [-1.53, 120.25819, 3.49],
    [-1.43, 120.06888, 3.71],
    [-1.24, 120.30166, 3.88],
    [-0.65, 119.93579, 4.16],
    [0.16, 119.57528, 3.92],
    [-1.2, 119.84173, 3.83],
    [-1.29, 120.10777, 4.01],
    [-0.62, 119.99503, 4.43],
    [-1.17, 119.65513, 3.47],
    [-0.04, 119.93609, 3.76],
    [-0.23, 119.7478, 3.49],
    [-1.41, 119.74216, 3.55],
    [-0.06, 119.72583, 4.35],
    [-0.6, 119.96339, 3.72],
    [-1.63, 119.9806, 3.42],
    [-1.07, 119.92073, 3.68],
    [-1.29, 120.05373, 3.9],
    [-1.38, 119.92776, 3.45],
    [-1.05, 119.88572, 3.81],
    [-0.06, 119.90926, 4.3],
    [-1.39, 119.9142, 3.57],
    [-1.27, 119.8681, 3.56],
    [-1.52, 119.53667, 3.81],
    [-1.48, 119.95618, 4.15],
    [-1.38, 120.58376, 4.56],
    [-0.67, 119.77382, 3.5],
    [-0.66, 119.91975, 3.41],
    [-0.32, 119.61509, 3.61],
    [-1.27, 119.94406, 4.29],
    [-1.29, 120.07302, 4.11],
    [-1.48, 120.15603, 3.58],
    [-1.56, 120.0386, 3.71],
    [-0.38, 119.38955, 4.5],
    [-1.27, 120.10854, 3.49],
    [-0.18, 119.6666, 3.76],
    [-1.41, 120.03812, 3.64],
    [-1.83, 120.2806, 3.92],
    [-1.74, 120.10455, 3.93],
    [-1.48, 120.02156, 4.34],
    [-2.45, 121.07949, 3.82],
    [-1.34, 120.16366, 4.22],
    [-1.47, 120.08736, 3.89],
    [-1.44, 120.10447, 4.19],
    [-1.28, 120.02583, 4.02],
    [-1.37, 120.2243, 4.01],
    [-1.27, 120.0098, 4.52],
    [-1.38, 120.10701, 4.09],
    [-1.38, 120.11501, 3.8],
    [-1.54, 120.14935, 3.53],
    [-2.36, 120.99974, 3.64],
    [-1.48, 120.22796, 4.14],
    [-2.46, 121.00674, 4.49],
    [-1.37, 120.04526, 4.41],
    [-0.51, 120.00417, 4.25],
    [-0.21, 119.84044, 3.94],
    [-0.41, 119.9719, 3.8],
    [-1.62, 120.3885, 4.26],
    [-0.33, 119.93781, 3.78],
    [0.09, 119.63097, 4.04],
    [-1.29, 120.05759, 4.61],
    [-0.68, 119.93278, 3.77],
    [-0.24, 119.51318, 3.67],
    [-1.26, 119.94669, 4.03],
    [-1.02, 119.90369, 4.09],
    [-2.37, 121.03091, 3.53],
    [-1.58, 120.16674, 4.73],
    [-1.55, 120.15167, 3.8],
    [-0.54, 120.06531, 4.03],
    [-1.41, 119.67827, 4.62],
    [-1.08, 120.09841, 4.74],
    [-1.49, 120.10814, 4.66],
    [-1.29, 120.12523, 4.59],
    [-1.67, 120.2305, 4.49],
    [-1.45, 120.32298, 4.39],
    [-1.49, 120.23036, 4.35],
    [-0.41, 119.95904, 4.11],
    [-0.06, 119.75789, 4.53],
    [0.21, 119.88525, 4.28],
    [-0.1, 119.40865, 4.14],
    [-0.01, 119.38523, 4.42],
    [0.04, 119.58958, 4.08],
    [-0.42, 119.571, 3.23],
    [-0.37, 119.85687, 3.64],
    [-0.04, 119.81544, 4.44],
    [0.08, 119.98061, 3.88],
    [-0.5, 119.84226, 4.53],
    [-1.45, 119.94399, 4.51],
    [-0.21, 119.68755, 4.22],
    [0.17, 119.82794, 3.4],
    [-3.12, 119.39597, 4.3],
    [-2.09, 120.95028, 4.25],
    [0.22, 119.85473, 4.07],
    [0.04, 119.73689, 4.55],
    [0.36, 120.20602, 4.25],
    [-1.13, 119.87151, 3.95],
    [0.06, 119.80566, 4.2],
    [0.17, 119.60835, 4.25],
    [-0.03, 120.04384, 3.85],
    [-1.54, 120.1803, 4.34],
    [-1.64, 120.28886, 3.82],
    [-0.53, 119.89737, 3.9],
    [0.13, 120.05077, 3.27],
    [-0.09, 119.76237, 3.66],
    [-1.54, 120.29906, 4.35],
    [-2.03, 120.94216, 4.39],
    [-0.89, 119.68203, 4.11],
    [-1.44, 120.00633, 4.71],
    [0.07, 119.55158, 4.1],
    [-0.97, 119.94501, 3.77],
    [0.02, 119.63614, 4.52],
    [-2.36, 121.03526, 4.31],
    [-1.54, 120.2193, 4.05],
    [-1.05, 119.59821, 4.55],
    [-0.71, 119.84074, 4.1],
    [0.23, 119.94321, 3.58],
    [-0.05, 119.84127, 4.03],
    [-1.23, 120.21468, 4.71],
    [0.28, 119.89805, 4.19],
    [-1.75, 119.53345, 4.73],
    [-0.14, 120.0076, 4.05],
    [-0.25, 119.7966, 4.69],
    [-0.71, 119.80025, 4.23],
    [-2.43, 120.74873, 3.84],
    [0.36, 119.88773, 4.33],
    [-1.2, 119.8363, 4.76],
    [-0.51, 119.74736, 4.66],
    [-0.42, 120.02463, 4.39],
    [-1.67, 120.31414, 4.57],
    [0.04, 119.7607, 4.71],
    [-0.24, 119.82613, 4.69],
    [-0.29, 119.83437, 3.08],
    [0.12, 119.99624, 3.52],
    [-0.4, 119.74828, 3.76],
    [-0.16, 119.71643, 4.72],
    [-0.27, 119.89268, 4.39],
    [-0.38, 119.85644, 4.25],
    [-0.26, 119.79221, 4.37],
    [-0.3, 119.62677, 4.37],
    [0.31, 119.93295, 4.02],
    [-0.12, 119.89102, 3.93],
    [-0.35, 119.48755, 3.49],
    [-0.2, 120.00687, 3.11],
    [-0.02, 119.8631, 4.19],
    [-0.26, 119.70612, 3.73],
    [-0.37, 119.63775, 3.8],
    [-0.32, 119.80291, 4.39],
    [-0.33, 119.67694, 4.31],
    [-0.21, 119.97384, 3.7],
    [-0.19, 119.93076, 4.41],
    [-0.25, 119.67789, 3.24],
    [-0.24, 119.78404, 4.71],
    [-0.09, 119.86357, 4.55],
    [-0.35, 119.96053, 4.37],
    [-2.42, 121.14996, 3.24],
    [-2.37, 120.80622, 3.12],
    [-2.54, 121.22311, 3.72],
    [0.07, 122.4424, 2.88],   
];
