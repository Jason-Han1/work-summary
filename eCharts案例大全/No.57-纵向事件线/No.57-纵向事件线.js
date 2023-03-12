let list = [
    {
        policy_content: '规定对处方药和非处方药分类管理。',
        policy_country: '中国',
        policy_time: '1999-06-11',
        policy_title: '《处方药与非处方药分类管理办法》（试行)',
    },
    {
        policy_content: '规定药品生产、经营企业、医疗机构应当对其生产、经营、使用的药品质量负责。',
        policy_country: '中国',
        policy_time: '2007-01-31',
        policy_title: '《药品流通监督管理方法》（国家食品药品监督管理局令第26号',
    },
    {
        policy_content:
            '《意见》指出通过生物医药园的建设，研究开发具有自主知识产权的新药及其他医药产品；孵化新型医药企业，为从事生物技术与医药领域技术孵化、中试的机构和企业提供一流、全方位、专业化的保障服务和条件支撑；发展以生物医药为主体，中药、化药为补充，医药贸易为纽带的新型医药产业链。',
        policy_country: '中国',
        policy_time: '2007-06-22',
        policy_title: '《关于共同建设国家生物医药国际创新园的意见》',
    },
    {
        policy_content: '进一步明确了药品生产、经营企业的管理规范行为',
        policy_country: '中国',
        policy_time: '2016-02-06',
        policy_title: '《中华人民共和国药品管理法实施条例》（2016年修订版）',
    },
    {
        policy_content: '将化药新药分为创新药和改良型新药，将原来新药定义的“中国新”变成了“全球性”',
        policy_country: '中国',
        policy_time: '2016-03-09',
        policy_title: '《关于发布化学药品注册分类改革工作方案的公告》',
    },
    {
        policy_content: '《意见》明确提出了优化服务环境、提升服务能力、营造生物医药产业创新发展的34条具体措施和办法。',
        policy_country: '中国',
        policy_time: '2016-03-18',
        policy_title: '《优化服务环境助推生物医药产业创新发展的意见》。',
    },
    {
        policy_content:
            '推进生物药、化学药新品种、优质中药、高性能医疗器械、新型辅料包材和制药设备六大重点领域发展，加快各领域新技术的开发和应用，促进产品、技术、质量升级',
        policy_country: '中国',
        policy_time: '2016-10-26',
        policy_title: '《医药工业发展规划指南》',
    },
    {
        policy_content:
            '《规划》确定了加快生物产业方面的发展任务。提出构建生物医药新体系、提升生物医学工程发展水平，到2020年，生物产业规模达到8—10万亿元，形成一批具有较强国际竞争力的新型生物技术企业和生物经济集群。',
        policy_country: '中国',
        policy_time: '2016-11-29',
        policy_title: '《“十三五”国家战略性新兴产业发展规划》',
    },
    {
        policy_content:
            '《意见》在生产方面强调严格药品上市审评审批，加快推进已上市仿制药质量和疗效一致性评价，对通过一致性评价的药品给予政策支持等。流通方面推动药品流通企业转型升级，推行药品购销“两票制”，使中间环节加价透明化等。',
        policy_country: '中国',
        policy_time: '2017-02-09',
        policy_title: '《关于进一步改革完善药品生产流通使用政策的若干建议》',
    },
    {
        policy_content:
            '药物临床试验审批决定、药品补充申请审批决定及进口药品再注册审批决定调整为由国家食品药品监督管理总局药品审评中心以国家食品药品监督管理总局的名义作出。',
        policy_country: '中国',
        policy_time: '2017-04-15',
        policy_title: '《国家药品监督管理总局关于调整部分药品行政审批事项程序的决定》',
    },
    {
        policy_content:
            '原料药、药用辅料和药包材注册申请改为在原料药、药用辅料和药包材登记平台与数据库，对原料药的基本信息、生产信息、特性鉴定等方面进行登记。',
        policy_country: '中国',
        policy_time: '2017-11-30',
        policy_title: '《总局关于调整原料药、药用辅料和药包材审评审批事项的公告（2017年第146号）》',
    },
    {
        policy_content:
            '提出，设立首期规模100亿元的广州生物医药产业投资基金，对进入临床研究的新药项目最高给予200万元的经费扶持，对本地生物医药产业项目实行工业用地先租赁后出让、弹性年期出让制度。并将对自主研发及在广州转化的生物制品分阶段给予资金扶持，对药物非临床安全性评价机构等项目建设给予不超过总投资额30％的补助。',
        policy_country: '中国',
        policy_time: '2018-03-30',
        policy_title: '《广州市加快生物医药产业发展若干规定（试行）》',
    },
    {
        policy_content: '允许尚未盈利或未有收入的生物科技公司赴港上市。',
        policy_country: '中国',
        policy_time: '2018-04-24',
        policy_title: '港交所新上市规则',
    },
    {
        policy_content:
            '《实施意见》规定，杭州将优先发展生物制药，包括抗体药物、重组蛋白药物、新型疫苗等新型生物技术类药物。同时提升发展医疗器械、创新发展化学制药、传承发展中药产业。杭州还重点对生物医药创新的关键节点进行择优支持。',
        policy_country: '中国',
        policy_time: '2018-05-21',
        policy_title: '《促进杭州市生物医药产业创新发展的实施意见》',
    },
    {
        policy_content:
            '提出重点发展现代中药（民族药）、生物制药、化学制药、医疗器械、特色保健品5条产业链，明确了各条产业链的实施路径，提出到2020年现代中药产业实现主营业务收入610亿元、特色保健品实现主营业务收入140亿元的发展目标。',
        policy_country: '中国',
        policy_time: '2018-06-17',
        policy_title: '《云南省生物医药产业施工图》',
    },
    {
        policy_content:
            '通过在盈利状况、股权结构等方面的差异化安排，重点鼓励生物医药等六大领域的企业在科创板上市。对于未盈利或未有收入的生物科技企业，上市需满足的主要条件是：预计使之不低于人民币40亿元，至少有一项核心产品获准开展2期临床试验。',
        policy_country: '中国',
        policy_time: '2019-01-30',
        policy_title: '上海证券交易所设立试点科创板',
    },
    {
        policy_content:
            '原辅包的使用必须符合药用要求，主要是指原辅包的质量、安全及功能应该满足药品制剂的需要。原辅包与药品制剂关联审评审批由原辅包登记人在登记平台上登记，药品制剂注册申请人提交注册申请时与平台登记资料进行关联；因特殊原因无法在平台登记的原辅包，也可在药品制剂注册申请时，由药品制剂注册申请人一并提供原辅包研究资料。',
        policy_country: '中国',
        policy_time: '2019-07-16',
        policy_title: '《国家药监局关于进一步完善药品关联审评审批和监管工作有关事宜的公告》（2019 年第 56 号）',
    },
    {
        policy_content: '对在中国境内从事药品研制、生产、经营、使用和监督管理活动作出具体的规定。',
        policy_country: '中国',
        policy_time: '2019-08-26',
        policy_title: '《中华人民共和国药品管理法（2019年8月修订版》',
    },
];
let seriesList = [];
var yarr = [];
var linearr = [];
var linev = { value: -0, symbol: 'none' };

list.map((item, index) => {
    seriesList.push({
        date: item.policy_time,
        title: item.policy_title,
        country: item.policy_country,
        content: item.policy_content,
        value: 0,
        label: {
            show: true,
            lineHeight: 20,
            align: index % 2 == 0 ? 'left' : 'right',
            padding: 20,
            position: index % 2 == 0 ? 'left' : 'right',
            formatter: function (params) {
                return `{bolder|${params.name}}\n${params.data.title}`;
            },
            rich: {
                bolder: {
                    fontWeight: 700,
                    color: '#F5222D',
                },
            },
        },
    });
});
seriesList.map((item, index) => {
    linearr.push({
        value: -0,
    });
    yarr.push(`${item.date}  ${item.country}`);
});
option = {
    grid: {
        top: 0,
        left: '50%',
        right: '30%',
        bottom: 0,
    },
    legend: {
        bottom: 0,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            padding: [2, 0, 0, 0],
        },
    },
    xAxis: {
        show: false,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
        min: 0,
        max: 0,
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                width: 4,
                color: '#F5222D',
            },
        },

        axisTick: {
            show: false,
            alignWithLabel: true,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            margin: 30,
            alignWithLabel: true,
            show: false,
        },
        data: ['', ...yarr, ''],
    },
    color: ['#333'],
    series: [
        {
            type: 'line',
            symbolSize: 8,
            itemStyle: {
                color:'red',
                borderColor:'red',
                borderWidth: 2,
            },

            hoverAnimation: false,
            legendHoverLink: false,
            data: [linev, ...seriesList, linev],
            lineStyle: {
                color: '#F5222D',
            },
        },
    ],
};
