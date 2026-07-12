const follow = (prompt, choices, answer, explanation) => ({
  prompt,
  choices: choices.map((text, index) => ({ id: `f${index + 1}`, text })),
  correctChoiceId: `f${answer}`,
  explanation,
})

const q = (
  pdfPage,
  prompt,
  choices,
  answer,
  explanation,
  followUp,
) => ({
  id: `q${pdfPage}`,
  pdfPage,
  prompt,
  choices: choices.map((text, index) => ({ id: `c${index + 1}`, text })),
  correctChoiceId: `c${answer}`,
  explanation,
  followUp,
})

const baseQuestions = [
  q(1, '光線に関する記述のうち、誤っているものはどれか。', [
    '光は、物体から放出される電磁波のことである。',
    '赤外線は、人体にあたると吸収されて熱を生じるので、熱線ともいわれる。',
    '可視光線は、明るさや色として日常もっとも関係の深い光線である。',
    '紫外線は、物の内部にまで浸透して殺菌的に作用するので、利用範囲が広い。',
  ], 4, '紫外線は物の表面にしか作用せず、内部には浸透しないため、利用範囲が限られる。',
  follow('紫外線の作用について正しい説明はどれか。', ['物の表面に作用し、内部には浸透しない。', '人体に吸収されると必ず熱だけを生じる。', '物の内部まで深く浸透する。', '明るさとしてだけ知覚される。'], 1, '紫外線は物の表面に作用し、内部には浸透しない。')),

  q(2, 'メタボリックシンドロームに関する記述で、正しいのはどれか。', [
    '腹囲が男性85cm以上、女性90cm以上であれば必ず該当する。',
    '命にかかわる重大な疾病の発症リスクは低い。',
    '食事、運動と密接な関係がある。',
    '皮下脂肪との関係が深い。',
  ], 3, '腹囲だけでは該当せず、血圧・血糖・脂質の基準も必要。動脈硬化性疾患を起こしやすく、皮下脂肪ではなく内臓脂肪が問題となる。',
  follow('メタボリックシンドロームで問題となる脂肪はどれか。', ['内臓脂肪', '皮下脂肪だけ', '骨髄脂肪', '褐色脂肪'], 1, 'メタボリックシンドロームでは内臓脂肪の蓄積が問題となる。')),

  q(3, '感染症と病原体の組み合わせとして、誤っているものはどれか。', ['日本脳炎―ウイルス', 'オウム病―クラミジア', '破傷風―細菌', 'ペスト―ウイルス'], 4, 'ペストの病原体はウイルスではなく細菌（ペスト菌）である。',
  follow('ペストの病原体はどれか。', ['細菌（ペスト菌）', 'ウイルス', 'クラミジア', '原虫'], 1, 'ペストはペスト菌による細菌感染症である。')),

  q(4, '人口静態統計に関する記述のうち、誤っているものはどれか。', ['国勢調査（5年ごと）が代表的なものである。', '出生届、死亡届、婚姻届、離婚届などの届出をもとに作られる。', '一定の日時における人口集団の特性を数量的に表したものである。', '総務省が調査を行っている。'], 2, '出生届・死亡届・婚姻届などは人口動態統計の資料。人口静態統計は国勢調査をもとに、ある一時点の人口の特性を表す。',
  follow('出生届・死亡届・婚姻届などを資料とする統計はどれか。', ['人口動態統計', '人口静態統計', '国民健康・栄養調査', '患者調査'], 1, 'これらの届出は人口動態統計の資料となる。')),

  q(5, '憲法第25条の（A）（B）に入る語句の組み合わせで正しいものはどれか。「健康で文化的な（A）生活」「（B）の向上及び増進」', ['豊かな―公衆衛生', '豊かな―国民健康', '最低限度の―公衆衛生', '最低限度の―国民健康'], 3, '「健康で文化的な最低限度の生活を営む権利」「公衆衛生の向上及び増進」と定められている。'),

  q(6, '特定健診・特定保健指導に関する記述で、正しいのはどれか。', ['特定健診では、腹囲測定のほか、血圧測定や血液検査が行われる。', '特定健診は60歳以上の人を対象として実施される。', '特定保健指導は、特定健診対象者全員に実施される。', '特定保健指導は、メタボの者に対してのみ実施される。'], 1, '対象は40～74歳の被保険者。特定保健指導はリスクのある者に行われ、メタボ予備群も対象になる。',
  follow('特定健診の対象年齢として正しいものはどれか。', ['40～74歳', '20～39歳', '60歳以上', '75歳以上'], 1, '特定健診の対象は40～74歳の被保険者である。')),

  q(7, '太陽光線に関する記述で正しい組み合わせはどれか。「（A）の形成」「波長の（B）紫外線により日焼け」', ['ビタミンD―長い', 'ビタミンC―短い', 'ビタミンC―長い', 'ビタミンD―短い'], 4, '太陽光線によりビタミンDが形成され、日焼けや皮膚がんの原因となるのは比較的波長の短い紫外線である。'),

  q(8, '三類感染症に分類される感染症として、誤っているものはどれか。', ['コレラ', '腸管出血性大腸菌感染症', '腸チフス', 'エボラ出血熱'], 4, 'エボラ出血熱は一類感染症である。', follow('エボラ出血熱の感染症法上の分類はどれか。', ['一類感染症', '二類感染症', '三類感染症', '五類感染症'], 1, 'エボラ出血熱は一類感染症に分類される。')),

  q(9, '合計特殊出生率についての記述で、誤っているものはどれか。', ['1人の女性が一生の間に生む子どもの数を表す。', '15歳から49歳の女性が集計の対象となっている。', '昭和50年から低下傾向にあり、令和元年は2.34人になっている。', '低下傾向の原因には、若年者の未婚率の上昇があげられる。'], 3, '令和元年の合計特殊出生率は約1.36である。'),

  q(10, '疾病予防の対策と段階の組み合わせで、適当でないものはどれか。', ['早期発見・早期治療―第2次予防', '健康増進―第1次予防', 'リハビリテーション―第3次予防', '予防接種―第2次予防'], 4, '予防接種は第1次予防。第2次予防は早期発見・早期治療、第3次予防はリハビリテーションである。',
  follow('予防接種が第1次予防に分類される理由はどれか。', ['疾病の発生を事前に防ぐため', '疾病を早期発見するため', '失われた機能を回復するため', '発症後の治療だけを行うため'], 1, '予防接種は疾病の発生を事前に防ぐため、第1次予防に分類される。')),

  q(11, 'WHO憲章の健康の定義で正しい組み合わせはどれか。「肉体的、（A）ならびに（B）に完全に良好な状態」', ['精神的―社会的', '環境的―経済的', '精神的―経済的', '環境的―社会的'], 1, 'WHO憲章では「肉体的、精神的ならびに社会的に完全に良好な状態」と定義される。'),

  q(12, '廃棄物処理に関する記述で、誤っているものはどれか。', ['「廃棄物の処理及び清掃に関する法律」に基づいて行われている。', '一般廃棄物は市町村の責務、産業廃棄物は都道府県の責務としている。', 'し尿は一般廃棄物に分類される。', '産業廃棄物の排出量は一般廃棄物の約10倍多い。'], 2, '産業廃棄物の処理は排出事業者の責務であり、都道府県の責務ではない。一般廃棄物の処理は市町村の責務である。',
  follow('産業廃棄物の処理責任を負うのは誰か。', ['排出事業者', '都道府県', '市町村', '地域住民'], 1, '産業廃棄物の処理は排出事業者の責務である。')),

  q(13, '糖尿病に関する記述で、正しいものはどれか。', ['肝臓から出るホルモンの不足により発病する。', '空腹時血糖値が110mg/dLを超えると糖尿病と診断される。', '生活習慣病の中で患者数が最も多い。', '合併症として腎障害がある。'], 4, 'インスリンは膵臓から分泌され、診断基準は空腹時血糖126mg/dL以上。患者数が最も多い生活習慣病は高血圧性疾患である。'),

  q(14, '平均寿命と健康寿命に関する記述のうち、誤っているものはどれか。', ['0歳児の平均余命が平均寿命となる。', '平均寿命は国民健康・栄養調査の結果を用いて算出されている。', '健康寿命とは健康上の問題で日常生活が制限されず生活できる期間である。', '平均寿命と健康寿命の差は、近年拡大しつつある。'], 2, '平均寿命は生命表（人口動態統計など）から算出され、国民健康・栄養調査は使用しない。'),

  q(15, '消毒方法と説明の組み合わせで、誤っているものはどれか。', ['煮沸消毒法―沸騰水中に15分間以上煮沸する方法', '蒸気消毒法―80℃の蒸気中に20分間放置する方法', '紫外線殺菌法―紫外線を照射して微生物を殺菌する方法', '化学的消毒法―エタノールや次亜塩素酸ナトリウムで消毒する方法'], 2, '蒸気消毒法は100℃の蒸気中に30～60分間放置する方法である。'),

  q(16, '三類感染症に分類される組み合わせはどれか。', ['結核、鳥インフルエンザ（H5N1）', 'E型肝炎、狂犬病', 'エボラ出血熱、ペスト', '腸管出血性大腸菌感染症、細菌性赤痢'], 4, '結核と鳥インフルエンザは二類、E型肝炎と狂犬病は四類、エボラ出血熱とペストは一類である。'),

  q(17, '生活習慣病の予防に関する記述のうち、誤っているものはどれか。', ['動物性脂肪をとる。', '喫煙をしない。', '食物繊維をとる。', '塩分を控えめにする。'], 1, '動物性脂肪の過剰摂取は動脈硬化などのリスクを高めるため、控えることが重要である。'),

  q(18, '平成30年の死因別死亡順位の正しい組み合わせはどれか。', ['悪性新生物―心疾患―肺炎', '心疾患―悪性新生物―老衰', '悪性新生物―心疾患―老衰', '心疾患―悪性新生物―肺炎'], 3, '1位は悪性新生物（がん）、2位は心疾患、3位は老衰。平成30年に老衰が3位へ上昇し、がんは昭和56年以降ずっと1位である。'),

  q(19, '感染症に関する記述のうち、誤っているものはどれか。', ['感染症とは、微生物が人体に侵入して起こる病気の一群をいう。', '感染源・感染経路・感受性宿主のいずれかを断ち切ることが予防対策になる。', '適切な手洗いは、病原体の伝播を予防する重要な手技である。', '無症状病原体保有者（キャリア）は感染源になることはない。'], 4, '無症状病原体保有者は症状がなくても病原体を保有し、感染源となりうる。三類感染症ではキャリアにも就業制限がある。'),

  q(20, 'メタボの診断基準にはないが、特定保健指導の基準に採用されているものはどれか。', ['BMIが25以上', '腹囲が男性85cm以上、女性90cm以上', '中性脂肪150mg/dL以上、またはHDLコレステロール40mg/dL未満', '空腹時血糖値110mg/dL以上'], 1, '腹囲、中性脂肪・HDLコレステロール、空腹時血糖値はメタボの診断基準に含まれる。'),

  q(21, '疾病予防に関する記述で、誤っているものはどれか。', ['第1次予防には、生活習慣の改善などがある。', '第2次予防には、定期的な集団検診などがある。', '第3次予防には、リハビリテーションなどがある。', '近年重視されているのは、第2次予防である。'], 4, '近年重視されているのは、生活習慣の改善による第1次予防である。'),

  q(22, '感染症に関する記述として、誤っているものはどれか。', ['感染経路は、感染症が発生する3条件の1つである。', 'せきやくしゃみなどで感染することを飛沫感染という。', '腸管出血性大腸菌感染症は三類だが就業制限はない。', '定期予防接種にはジフテリア、風疹、日本脳炎などがある。'], 3, '三類感染症には就業制限がある。特に食品を取り扱う業務への就業が制限される。'),

  q(23, '生活習慣病に関する記述のうち、誤っているものはどれか。', ['2018年の脳血管疾患による死亡率はわが国で最も高い。', 'メタボ対策として40～74歳に特定健診・特定保健指導が実施される。', '高血圧症は塩分を控え、精神的ストレスを減らすことで予防につながる。', '動脈硬化症の原因には内分泌の異常、喫煙、脂肪の過剰摂取などがある。'], 1, '死因の1位は悪性新生物。脳血管疾患は4位前後であり、最も高いわけではない。'),

  q(24, 'ネズミや衛生害虫と感染症の正しい組み合わせはどれか。', ['ハエ―マラリア', '蚊―日本脳炎', 'ネズミ―結核', 'ノミ―つつが虫病'], 2, 'マラリアは蚊、結核は空気感染、つつが虫病はつつが虫が媒介する。ハエはコレラ・赤痢、ネズミやノミはペストなどを媒介する。'),

  q(25, '感染症に関する記述のうち、誤っているものはどれか。', ['感染症発病者の早期診断と治療は感染源対策となる。', '経口感染とは汚染された食品や水の摂取によるもの。', '麻疹は蚊やアブによる経皮感染による感染症である。', '標準予防策には手洗いや排泄物に直接触れないことがある。'], 3, '麻疹は空気感染・飛沫感染・接触感染で広がる。経皮感染の例は日本脳炎やマラリアである。'),

  q(26, '生活習慣病に関する記述のうち、誤っているものはどれか。', ['発症には生活習慣と遺伝的要因、加齢、環境などが関与する。', 'メタボとは内臓肥満に高血圧などが組み合わさった病態である。', '対策は症状が出る成人期以降に見直しを行えばよい。', '食生活を見直すことで予防につながる。'], 3, '生活習慣病の予防は成人期以降では遅く、幼少期から健康な生活習慣を身につけることが重要である。'),

  q(27, '公衆衛生の現状に関する記述で、誤っているものはどれか。', ['公衆衛生行政は医療行政、薬事行政、食品衛生行政と深い関連がある。', '憲法第25条に基づいて公衆衛生関係の諸法規が作られている。', '公衆衛生行政は一般衛生行政、学校保健行政、労働衛生行政の3本立てである。', '保健所は公衆衛生行政の第一線機関として広範な活動を行っている。'], 3, '公衆衛生行政は一般衛生、学校保健、労働衛生、環境保健の4本立てである。'),

  q(28, '空気感染する感染症の組み合わせとして正しいものはどれか。A 麻しん、B 結核、C 風しん、D 百日咳', ['AとB', 'AとC', 'BとD', 'CとD'], 1, '空気感染するのは麻しん・結核・水痘。風しんと百日咳は飛沫感染である。'),

  q(29, '上水道に関する記述のうち、誤っているものはどれか。', ['水道法では水質基準として51項目が定められている。', '水道の普及率は現在98％を超えている。', '水道水の消毒には塩素消毒が用いられている。', '水道行政は厚生労働省が所管している。'], 4, '水道行政は2024年4月から環境省へ移管され、現在は環境省の所管である。'),

  q(30, 'わが国の人口に関する記述のうち、誤っているものはどれか。', ['わが国の総人口は、近年減少傾向にある。', '老年人口とは、75歳以上の人口をいう。', '少子高齢化の進行により、老年人口の割合は増加している。', '国勢調査は5年ごとに総務省が実施している。'], 2, '老年人口は65歳以上。75歳以上は後期高齢者である。'),

  q(31, '糖尿病の診断基準項目として、正しいものはどれか。', ['ウエスト周囲径（腹囲）', 'LDLコレステロール値', 'トリグリセライド値', 'HbA1c値'], 4, '腹囲はメタボ、LDLコレステロールとトリグリセライドは脂質異常症の診断基準である。'),

  q(32, '平均寿命に関する記述で、正しいのはどれか。', ['長寿で死亡した人の平均年齢である。', '0歳の平均余命のことである。', '心身ともに健康で活動できる年齢期間のことである。', '1年間に死亡した人の平均年齢である。'], 2, '平均寿命は生命表に基づく0歳の平均余命である。心身ともに健康で活動できる期間は健康寿命である。'),

  q(33, '消毒薬の選択の組み合わせのうち、誤っているものはどれか。', ['金属器具―エタノール', '非金属器具―フタラール', '手指皮膚―グルタラール', '吐物による汚染―クレゾール石けん'], 3, 'グルタラールは毒性が強く、手指皮膚には使用できない。手指にはエタノールや逆性石けんなどを使用する。'),

  q(34, '生活習慣病に関する記述のうち、正しいものはどれか。', ['予防対策として注目されているのはロコモティブシンドローム対策である。', '動脈硬化には植物性脂肪の取り過ぎが影響しやすい。', '糖尿病は遺伝的素質によるため食習慣では左右されない。', 'HbA1cが6.5％以上の場合は糖尿病が疑われる。'], 4, '予防対策ではメタボ対策が注目され、動物性脂肪の過剰摂取や食習慣・運動習慣が関係する。'),

  q(35, '生活習慣病の予防で、第2次予防として適切なものはどれか。', ['運動', '人間ドック', 'リハビリテーション', '予防接種'], 2, '運動と予防接種は第1次予防、リハビリテーションは第3次予防である。'),

  q(36, '感染症の分類と感染症名の正しい組み合わせはどれか。', ['一類感染症―エボラ出血熱', '二類感染症―腸管出血性大腸菌感染症', '三類感染症―エキノコックス症', '四類感染症―ジフテリア'], 1, '腸管出血性大腸菌感染症は三類、エキノコックス症は四類、ジフテリアは二類である。'),

  q(37, '生活習慣病に関する記述のうち、誤っているものはどれか。', ['がん、心臓病、脳血管疾患などの生活習慣病による死亡が増加している。', '高齢化が進むことで生活習慣病患者の増加が予想される。', '睡眠、運動、喫煙などの生活習慣が関係している。', '2008年から30歳以上の被保険者に特定健診が実施されている。'], 4, '特定健診・特定保健指導の対象は40～74歳の被保険者である。'),

  q(38, '水道法の遊離残留塩素の基準値で正しいのはどれか。', ['0.1ppm', '0.5ppm', '10ppm', '20ppm'], 1, '水道法では蛇口で0.1mg/L（0.1ppm）以上の遊離残留塩素を含むことが規定されている。'),

  q(39, '感染症の予防対策に関する記述のうち、誤っているものはどれか。', ['環境の清潔を保持し適切な消毒を行うことが重要である。', '適切な手洗いは病原体の伝播を予防する最も重要な手段である。', '血液や嘔吐物に直接触れないことは感染経路対策として重要である。', '感染症を引き起こす五条件を断ち切ることが予防対策となる。'], 4, '感染症の成立条件は感染源・感染経路・感受性宿主の三条件である。'),

  q(40, '生活習慣病に関する穴埋め問題で正しい組み合わせはどれか。「生活習慣（A）、運動…」「40～74歳に（B）が実施」', ['緊張―ストレスチェック', '休養―特殊健康診断', '睡眠―特定健康診断と特定保健指導', 'ゲーム―VDT健康診断'], 3, '睡眠は生活習慣に含まれ、40～74歳のメタボ対策として特定健康診断と特定保健指導が行われる。'),

  q(41, '「人々が自らの健康をコントロールし改善できるようにするプロセス」の定義はどれか。', ['プライマリ・ヘルスケア', 'ヘルスプロモーション', 'アルマ・アタ宣言', 'ウインスロー'], 2, 'ヘルスプロモーションの定義である。プライマリ・ヘルスケアは地域レベルの基本的保健医療の概念である。'),

  q(42, '使用目的と消毒液の正しい組み合わせはどれか。', ['嘔吐物―アルコール', '非金属器具―第四級アンモニウム塩', '金属器具―次亜塩素酸ナトリウム', '手指皮膚―過酢酸'], 2, '嘔吐物には次亜塩素酸ナトリウムを使う。次亜塩素酸ナトリウムは金属を腐食し、過酢酸は手指皮膚に使用できない。'),

  q(43, '生活習慣病に関する記述のうち、誤っているものはどれか。', ['心筋梗塞を起こすと半身不随の後遺症が残る場合が多い。', '喫煙、動物性脂肪の摂り過ぎは動脈硬化症の原因となる。', 'がんの予防には生活習慣を見直し早期発見に努めることが重要である。', 'アルコール摂取過多で脂肪肝、肝硬変、肝がんとなることがある。'], 1, '半身不随（片麻痺）は脳血管疾患の後遺症。心筋梗塞の後遺症には心不全などがある。'),

  q(44, '下水道に関する記述のうち、誤っているものはどれか。', ['下水道の普及率は、全国平均で約80％である。', '下水の処理方法には、活性汚泥法がある。', '下水道の整備は、感染症の予防に大きく貢献している。', '下水道法では、下水道の管理は都道府県の責務としている。'], 4, '下水道の設置・管理は原則として市町村の責務である。'),

  q(45, 'わが国の死因に関する記述のうち、正しいものはどれか。', ['死因の第1位は、長年にわたり心疾患である。', '悪性新生物の部位別死亡数は、男女とも胃がんが最も多い。', '老衰による死亡は、近年増加傾向にある。', '年齢調整死亡率は、近年上昇傾向にある。'], 3, '死因第1位は悪性新生物。部位別では男性は肺がん、女性は大腸がんが最多で、年齢調整死亡率は低下傾向にある。'),

  q(46, '人口動態統計に関する記述で、誤っているものはどれか。', ['1年間の出生、死亡、死産、婚姻、離婚の変動要因を把握するものである。', '合計特殊出生率は15～49歳の女子の年齢別出生率を合計したものである。', '高齢化率は令和2年で30％未満である。', '令和2年の平均寿命は男女とも世界最長寿国であった。'], 4, '令和2年の平均寿命について、男性は世界最長寿ではない。「男女とも」という部分が誤りである。'),

  q(47, '三類感染症の就業制限に関する穴埋めで正しい組み合わせはどれか。「患者あるいは（A）は（B）に従事禁止」', ['濃厚接触者―食品に直接触れる業務', '濃厚接触者―食品を取り扱う業務全般', '無症候性キャリア―食品に直接触れる業務', '無症候性キャリア―食品を取り扱う業務全般'], 3, '濃厚接触者は感染の機会があった人を指す。禁止対象は食品を取り扱う業務全般ではなく、食品に直接触れる業務である。'),

  q(48, '生活習慣病に関する記述のうち、正しいものはどれか。', ['糖尿病は空腹時血糖値のみで診断する。', '生活習慣病は短期的な生活習慣に起因して起こる。', '高血圧症は脳血管疾患や心臓病の大きな要因となる。', 'メタボは皮下脂肪症候群という。'], 3, '糖尿病はHbA1cなども用いて診断し、生活習慣病は長年の習慣に起因する。メタボは内臓脂肪症候群である。'),

  q(49, '細菌が引き起こす感染症として、誤っているものはどれか。', ['コレラ', 'マラリア', '破傷風', '結核'], 2, 'マラリアの病原体はマラリア原虫（寄生虫）。コレラ菌、破傷風菌、結核菌は細菌である。'),

  q(50, '生活習慣病に関する記述のうち、正しいものはどれか。', ['肺がんと喫煙との関連は全くない。', '脳血管疾患の死亡率は近年著しく増加傾向にある。', '高血圧の危険因子として肥満や運動不足があげられる。', '肝臓病はアルコール摂取量との関係性はない。'], 3, '喫煙は肺がんの大きな危険因子。脳血管疾患の死亡率は減少傾向で、肝臓病はアルコール摂取量と強い関係がある。'),

  q(51, '感染症に関する組み合わせのうち、正しいものはどれか。', ['接触感染―細菌―伝染性膿痂疹（とびひ）', '飛沫感染―細菌―麻疹', '空気感染―ウイルス―結核', '経口感染―ウイルス―マラリア'], 1, '麻疹はウイルスによる空気感染、結核は細菌による空気感染、マラリアは原虫による蚊の媒介感染である。'),

  q(52, '生活習慣病に関する記述で、誤っているものはどれか。', ['長年にわたる生活習慣が影響して発症する。', '適切な運動で高血圧、動脈硬化などのリスクが低減する。', '喫煙で心疾患、脳血管疾患などのリスクが高まる。', '脳出血の予防には脂肪摂取を極力控えた食生活が重要である。'], 4, '脂肪を極端に控えるのではなく、バランスの良い食生活が重要。脳出血予防では塩分摂取にも注意する。'),

  q(53, '感染症法の類型と感染症名の正しい組み合わせはどれか。', ['一類―腸管出血性大腸菌感染症', '二類―鳥インフルエンザ（H5N1、H7N9）', '三類―クリプトスポリジウム症', '四類―エボラ出血熱'], 2, '腸管出血性大腸菌感染症は三類、クリプトスポリジウム症は五類、エボラ出血熱は一類である。'),

  q(54, '高血圧に関する記述で、誤っているものはどれか。', ['食塩のとりすぎは高血圧の原因になることがある。', '高血圧は脳卒中や心臓病の原因になることがある。', '高血圧は生活習慣病の1つである。', '最高血圧が180mmHg以上を一般に高血圧という。'], 4, '一般に収縮期血圧140mmHg以上を高血圧という。180mmHg以上はIII度高血圧に分類される重症段階である。'),

  q(55, '感染症の予防対策に関する記述のうち、正しいものはどれか。', ['手洗い・マスクの着用は感染経路対策である。', '日本では検疫が全く行われていない。', '定期接種は都道府県が主体で義務付けられている。', '感染症に対する感受性を低下させる方法はない。'], 1, '日本では検疫が行われ、定期予防接種は市町村が主体で努力義務。予防接種で感受性を低下させることができる。'),

  q(56, '生活習慣病に関する記述のうち、誤りはどれか。', ['メタボ対策として40～74歳に特定健診・特定保健指導が実施される。', '動脈硬化は冠状動脈、大動脈、脳、腎臓などの動脈によく起こる。', '糖尿病の初期は自覚症状がなく健康診断で発見されることが多い。', '生活習慣は青年期から長年にわたり形成されるため、できるだけ早い段階で健康な生活習慣を身につけることが重要である。'], 4, '生活習慣は青年期からではなく幼少期から形成されるため、幼少期からの見直しや改善が重要である。'),

  q(57, '生活習慣病に含まれないものはどれか。', ['結核', '脳梗塞', '大腸がん', '心筋梗塞'], 1, '結核は結核菌による感染症であり、生活習慣病ではない。'),

  q(58, '生活習慣病に関する記述について、誤りはどれか。', ['生活習慣病には、がん、結核、糖尿病がある。', '予防には食生活、運動、喫煙、飲酒などの見直しが有効である。', 'メタボの診断に用いられる項目の1つに腹囲がある。', '高血圧は脳血管疾患、心疾患などの大きな要因になる。'], 1, '結核は感染症であり、生活習慣病ではない。'),

  q(59, '保健所の業務に関する記述のうち、誤っているものはどれか。', ['地域住民の健康の保持増進に関する業務を行っている。', '食品衛生に関する監視指導を行っている。', '感染症の予防に関する業務を行っている。', '乳幼児健診や予防接種を直接実施している。'], 4, '乳幼児健診や予防接種を直接実施するのは市町村保健センター。保健所は広域的・専門的な業務を担う。'),

  q(60, '水道法の水質基準項目のうち、基準が「検出されないこと」とされているものはどれか。', ['一般細菌', '鉄及びその化合物', 'ナトリウム及びその化合物', '大腸菌'], 4, '一般細菌は1mLで集落数100以下、鉄及びその化合物は0.3mg/L以下、ナトリウム及びその化合物は200mg/L以下である。'),
]

const supplementalFollowUps = {
  13: follow('インスリンが分泌される場所はどれか。', ['膵臓のランゲルハンス島β細胞', '肝臓', '腎臓', '甲状腺'], 1, 'インスリンは膵臓のランゲルハンス島β細胞から分泌される。'),
  14: follow('平均寿命の算出に使われるものはどれか。', ['生命表', '国民健康・栄養調査だけ', '学校保健統計', '家計調査'], 1, '平均寿命は人口動態統計などから作られる生命表を用いて算出する。'),
  15: follow('蒸気消毒法の条件として正しいものはどれか。', ['100℃の蒸気中に30～60分', '80℃の蒸気中に20分', '60℃の蒸気中に5分', '120℃の乾熱中に1分'], 1, '蒸気消毒法は100℃の蒸気中に30～60分間放置する。'),
  17: follow('動物性脂肪の過剰摂取を控える主な理由はどれか。', ['動脈硬化などのリスクを高めるため', '感染症の原因になるため', '食物繊維が増えすぎるため', '血圧を必ず下げるため'], 1, '動物性脂肪の過剰摂取は動脈硬化などのリスクを高める。'),
  19: follow('無症状病原体保有者が感染源になりうる理由はどれか。', ['症状がなくても病原体を保有しているため', '必ず重い症状が現れるため', '病原体をすでに排除しているため', '感染経路を持たないため'], 1, '無症状でも病原体を保有しているため、感染源となりうる。'),
  21: follow('第1次予防で重視される取り組みはどれか。', ['生活習慣を改善して発症を防ぐ', '集団検診だけで早期発見する', 'リハビリテーションだけを行う', '発症後の治療だけを行う'], 1, '第1次予防では、生活習慣を改善して疾病の発症を防ぐことが重視される。'),
  22: follow('三類感染症の就業制限で特に対象となる業務はどれか。', ['食品に直接触れる業務', 'すべての事務作業', '屋外作業だけ', '就業制限はない'], 1, '三類感染症では食品に直接触れる業務への就業が制限される。'),
  23: follow('2018年のわが国の死因第1位はどれか。', ['悪性新生物', '脳血管疾患', '肺炎', '不慮の事故'], 1, '死因第1位は悪性新生物（がん）である。'),
  25: follow('麻疹の主な感染経路として正しいものはどれか。', ['空気・飛沫・接触感染', '蚊による経皮感染だけ', '汚染水による経口感染だけ', '母子感染だけ'], 1, '麻疹は空気感染・飛沫感染・接触感染で広がる。'),
  26: follow('生活習慣病の予防を幼少期から始める理由はどれか。', ['生活習慣は幼少期から形成されるため', '成人期には生活習慣が存在しないため', '高齢期には予防が禁止されるため', '症状が出てからでないと予防できないため'], 1, '生活習慣は幼少期から形成されるため、早い段階で健康な習慣を身につけることが重要である。'),
  27: follow('公衆衛生行政の4本立てで、3本に加えて必要な分野はどれか。', ['環境保健行政', '医療行政', '薬事行政', '食品衛生行政'], 1, '一般衛生、学校保健、労働衛生に環境保健行政を加えた4本立てである。'),
  29: follow('水道行政が環境省へ移管された時期はどれか。', ['2024年4月', '2018年4月', '2020年4月', '2026年4月'], 1, '水道行政は2024年4月に厚生労働省から環境省へ移管された。'),
  30: follow('75歳以上の高齢者区分はどれか。', ['後期高齢者', '年少人口', '生産年齢人口', '前期高齢者だけ'], 1, '老年人口は65歳以上で、そのうち75歳以上は後期高齢者である。'),
  33: follow('グルタラールを手指皮膚に使用できない主な理由はどれか。', ['毒性が強い', '金属を腐食させるため', '消毒効果が弱いため', '水に溶けないため'], 1, 'グルタラールは毒性が強く、手指皮膚には使用できない。'),
  37: follow('特定健診・特定保健指導の対象年齢はどれか。', ['40～74歳', '30歳以上', '20～39歳', '75歳以上だけ'], 1, '対象は40～74歳の被保険者である。'),
  39: follow('感染症成立の三条件に含まれる組み合わせはどれか。', ['感染源・感染経路・感受性宿主', '温度・湿度・季節', '細菌・ウイルス・原虫', '食事・運動・睡眠'], 1, '感染症成立の三条件は感染源・感染経路・感受性宿主である。'),
  43: follow('半身不随が後遺症として残りやすいのはどれか。', ['脳血管疾患', '心筋梗塞だけ', '脂肪肝', '高尿酸血症'], 1, '半身不随（片麻痺）は脳血管疾患の代表的な後遺症である。'),
  44: follow('下水道の設置・管理を原則担うのはどこか。', ['市町村', '都道府県だけ', '国だけ', '排出事業者'], 1, '下水道の設置・管理は原則として市町村の責務である。'),
  46: follow('令和2年の平均寿命について正しい説明はどれか。', ['男性は世界最長寿ではなかった', '男女とも必ず世界1位だった', '女性は世界最短だった', '男女の統計はなかった'], 1, '男性は世界最長寿ではなく、「男女とも世界最長寿」が誤りである。'),
  48: follow('メタボリックシンドロームの別名はどれか。', ['内臓脂肪症候群', '皮下脂肪症候群', '骨格筋症候群', '低血糖症候群'], 1, 'メタボリックシンドロームは内臓脂肪症候群である。'),
  49: follow('マラリアの病原体はどれか。', ['マラリア原虫', '細菌', 'ウイルス', 'クラミジア'], 1, 'マラリアは寄生虫であるマラリア原虫によって起こる。'),
  52: follow('脳出血予防の食生活として適切なのはどれか。', ['脂肪を極端に避けず、塩分にも注意する', '脂肪を完全に断つ', '塩分を積極的に増やす', '食事内容は関係ない'], 1, '極端な脂肪制限ではなく、バランスと塩分摂取への注意が重要である。'),
  54: follow('一般に高血圧とされる収縮期血圧はどれか。', ['140mmHg以上', '100mmHg以上', '120mmHg以上', '180mmHg以上だけ'], 1, '一般に収縮期血圧140mmHg以上を高血圧という。'),
  56: follow('生活習慣病予防を早期に始めるべき理由はどれか。', ['生活習慣は幼少期から形成されるため', '青年期まで生活習慣が存在しないため', '成人期以降は生活習慣が変化しないため', '症状が出るまで予防できないため'], 1, '生活習慣は幼少期から形成されるため、早期からの見直しや改善が重要である。'),
  57: follow('結核が生活習慣病に含まれない理由はどれか。', ['結核菌による感染症だから', '外傷だから', '遺伝病だけだから', '老化現象だから'], 1, '結核は結核菌によって起こる感染症である。'),
  58: follow('結核が生活習慣病に含まれない理由はどれか。', ['結核菌による感染症だから', '食習慣だけで発症するから', '運動不足だけで発症するから', '加齢だけで発症するから'], 1, '結核は結核菌による感染症であり、生活習慣病ではない。'),
  59: follow('乳幼児健診や予防接種を直接実施するのはどこか。', ['市町村保健センター', '保健所だけ', '環境省', '労働基準監督署'], 1, '乳幼児健診や予防接種を直接実施するのは市町村保健センターである。'),
  60: follow('一般細菌の水質基準はどれか。', ['1mLで集落数100以下', '検出されないこと', '0.3mg/L以下', '200mg/L以下'], 1, '一般細菌の水質基準は、1mLで集落数100以下である。'),
}

const questions = baseQuestions.map((question) => ({
  ...question,
  followUp: question.followUp ?? supplementalFollowUps[question.pdfPage],
}))

const shuffle = (values, random = Math.random) => {
  const copy = [...values]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1))
    ;[copy[index], copy[target]] = [copy[target], copy[index]]
  }
  return copy
}

const createSession = (random = Math.random) => ({
  version: 1,
  screen: 'quiz',
  currentIndex: 0,
  items: shuffle(questions, random).map((question) => ({
    questionId: question.id,
    choiceOrder: shuffle(question.choices.map((choice) => choice.id), random),
    followUpChoiceOrder: question.followUp
      ? shuffle(question.followUp.choices.map((choice) => choice.id), random)
      : undefined,
  })),
})

const replaceCurrent = (session, updated) => ({
  ...session,
  items: session.items.map((item, index) => index === session.currentIndex ? updated : item),
})

const answerPrimary = (session, choiceId) => {
  const item = session.items[session.currentIndex]
  if (!item || item.primaryChoiceId !== undefined) return session
  const question = questions.find((candidate) => candidate.id === item.questionId)
  if (!question || !question.choices.some((choice) => choice.id === choiceId)) return session
  const primaryCorrect = choiceId === question.correctChoiceId
  return replaceCurrent(session, {
    ...item,
    primaryChoiceId: choiceId,
    primaryCorrect,
    needsFollowUp: primaryCorrect && Boolean(question.followUp),
  })
}

const answerFollowUp = (session, choiceId) => {
  const item = session.items[session.currentIndex]
  if (!item?.needsFollowUp || item.followUpChoiceId !== undefined) return session
  const question = questions.find((candidate) => candidate.id === item.questionId)
  if (!question?.followUp?.choices.some((choice) => choice.id === choiceId)) return session
  return replaceCurrent(session, {
    ...item,
    followUpChoiceId: choiceId,
    followUpCorrect: choiceId === question.followUp.correctChoiceId,
  })
}

const advance = (session) => {
  const item = session.items[session.currentIndex]
  const canAdvance = item?.primaryChoiceId && (!item.needsFollowUp || item.followUpChoiceId)
  if (!canAdvance) return session
  if (session.currentIndex === session.items.length - 1) return { ...session, screen: 'result' }
  return { ...session, currentIndex: session.currentIndex + 1 }
}

const calculateResult = (session) => {
  const primaryCorrect = session.items.filter((item) => item.primaryCorrect).length
  const followUpCorrect = session.items.filter((item) => item.followUpCorrect).length
  const primaryAnswered = session.items.filter((item) => item.primaryChoiceId !== undefined).length
  const followUpAnswered = session.items.filter((item) => item.followUpChoiceId !== undefined).length
  const answered = primaryAnswered + followUpAnswered
  const correct = primaryCorrect + followUpCorrect
  return { primaryCorrect, followUpCorrect, answered, correct, percent: answered ? Math.round(correct / answered * 100) : 0 }
}

const validChoiceOrder = (order, choices) => Array.isArray(order)
  && order.length === choices.length
  && new Set(order).size === choices.length
  && order.every((id) => choices.some((choice) => choice.id === id))

const validateSavedSession = (value) => {
  if (!value || value.version !== 1 || !['quiz', 'result'].includes(value.screen)) return null
  if (!Number.isInteger(value.currentIndex) || value.currentIndex < 0 || value.currentIndex >= questions.length) return null
  if (!Array.isArray(value.items) || value.items.length !== questions.length) return null
  const ids = new Set()
  for (const item of value.items) {
    const question = questions.find((candidate) => candidate.id === item?.questionId)
    if (!question || ids.has(question.id) || !validChoiceOrder(item.choiceOrder, question.choices)) return null
    ids.add(question.id)
    if (item.followUpChoiceOrder !== undefined && (!question.followUp || !validChoiceOrder(item.followUpChoiceOrder, question.followUp.choices))) return null
    if (item.primaryChoiceId !== undefined && !question.choices.some((choice) => choice.id === item.primaryChoiceId)) return null
    if (item.followUpChoiceId !== undefined && !question.followUp?.choices.some((choice) => choice.id === item.followUpChoiceId)) return null
    if (item.primaryCorrect !== undefined && typeof item.primaryCorrect !== 'boolean') return null
    if (item.followUpCorrect !== undefined && typeof item.followUpCorrect !== 'boolean') return null
    if (item.needsFollowUp !== undefined && typeof item.needsFollowUp !== 'boolean') return null
  }
  return value
}

const STORAGE_KEY = 'quiz-710-plain-html-v1'
const saveSession = (session) => localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
const loadSession = () => {
  try {
    return validateSavedSession(JSON.parse(localStorage.getItem(STORAGE_KEY)))
  } catch {
    return null
  }
}

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
})[character])

const orderedChoices = (choices, order) => order.map((id) => choices.find((choice) => choice.id === id)).filter(Boolean)
const choiceClass = (id, answerId, selectedId) => {
  if (!selectedId) return 'choice'
  if (id === answerId) return 'choice correct'
  if (id === selectedId) return 'choice wrong'
  return 'choice muted'
}

const appRoot = document.getElementById('app')
let savedSession = loadSession()
let activeSession = null

const update = (session) => {
  activeSession = session
  savedSession = session
  saveSession(session)
  render()
}

const choicesHtml = (choices, order, answerId, selectedId, kind) => orderedChoices(choices, order).map((choice) => `
  <button class="${choiceClass(choice.id, answerId, selectedId)}" type="button" data-${kind}="${choice.id}" ${selectedId ? 'disabled' : ''}>
    ${escapeHtml(choice.text)}
  </button>`).join('')

const renderStart = () => {
  appRoot.innerHTML = `<main class="shell start-screen">
    <section class="card hero">
      <span class="eyebrow">60問・ランダム学習</span>
      <h1>710演習問題<br>学習クイズ</h1>
      <p>問題と選択肢を毎回シャッフル。正解後は、理由を確かめる追加問題にも挑戦します。</p>
      <button class="primary" id="start" type="button">学習開始</button>
      ${savedSession ? '<button class="secondary" id="resume" type="button">続きから</button>' : ''}
    </section>
  </main>`
  document.getElementById('start').addEventListener('click', () => update(createSession()))
  document.getElementById('resume')?.addEventListener('click', () => { activeSession = savedSession; render() })
}

const renderResult = () => {
  const result = calculateResult(activeSession)
  const wrong = activeSession.items.filter((item) => item.primaryCorrect === false || item.followUpCorrect === false)
  appRoot.innerHTML = `<main class="shell">
    <section class="card result-card">
      <span class="eyebrow">学習完了</span><h1>${result.percent}点</h1>
      <div class="score-grid">
        <div><strong>${result.primaryCorrect}</strong><span>第1問 正解</span></div>
        <div><strong>${result.followUpCorrect}</strong><span>理解チェック 正解</span></div>
        <div><strong>${result.correct}/${result.answered}</strong><span>総合</span></div>
      </div>
      <button class="primary" id="restart" type="button">もう一度ランダムに挑戦</button>
      <button class="secondary" id="reset" type="button">履歴を消して終了</button>
    </section>
    ${wrong.length ? `<section class="review"><h2>復習する問題</h2>${wrong.map((item) => {
      const question = questions.find((entry) => entry.id === item.questionId)
      return `<article class="card review-item"><span>PDF ${question.pdfPage}ページ</span>
        ${item.primaryCorrect === false ? `<h3>${escapeHtml(question.prompt)}</h3><p>${escapeHtml(question.explanation)}</p>` : ''}
        ${item.followUpCorrect === false && question.followUp ? `<h3>${escapeHtml(question.followUp.prompt)}</h3><p>${escapeHtml(question.followUp.explanation)}</p>` : ''}
      </article>`
    }).join('')}</section>` : ''}
  </main>`
  document.getElementById('restart').addEventListener('click', () => update(createSession()))
  document.getElementById('reset').addEventListener('click', () => {
    if (!confirm('保存した学習履歴を消しますか？')) return
    localStorage.removeItem(STORAGE_KEY)
    savedSession = null
    activeSession = null
    render()
  })
}

const renderQuiz = () => {
  const item = activeSession.items[activeSession.currentIndex]
  const question = questions.find((entry) => entry.id === item.questionId)
  const primaryAnswered = item.primaryChoiceId !== undefined
  const followAnswered = item.followUpChoiceId !== undefined
  const canAdvance = primaryAnswered && (!item.needsFollowUp || followAnswered)
  const nextLabel = activeSession.currentIndex === activeSession.items.length - 1 ? '結果を見る' : '次の問題'
  appRoot.innerHTML = `<main class="shell">
    <header class="progress-header">
      <div><span class="eyebrow">進捗</span><strong>${activeSession.currentIndex + 1} / ${activeSession.items.length}</strong></div>
      <div class="progress"><span style="width:${(activeSession.currentIndex + 1) / activeSession.items.length * 100}%"></span></div>
    </header>
    <section class="card question-card">
      <span class="page-label">PDF ${question.pdfPage}ページ</span>
      <h1>${escapeHtml(question.prompt)}</h1>
      <div class="choices">${choicesHtml(question.choices, item.choiceOrder, question.correctChoiceId, item.primaryChoiceId, 'primary')}</div>
      ${primaryAnswered ? `<div class="feedback ${item.primaryCorrect ? 'ok' : 'ng'}" role="status">
        <h2>${item.primaryCorrect ? '正解です' : '不正解です'}</h2>
        ${!item.needsFollowUp ? `<p>${escapeHtml(question.explanation)}</p>` : ''}
      </div>` : ''}
    </section>
    ${item.needsFollowUp && question.followUp ? `<section class="card follow-card">
      <span class="eyebrow">理解チェック</span><h2>${escapeHtml(question.followUp.prompt)}</h2>
      <div class="choices">${choicesHtml(question.followUp.choices, item.followUpChoiceOrder || [], question.followUp.correctChoiceId, item.followUpChoiceId, 'follow')}</div>
      ${followAnswered ? `<div class="feedback ${item.followUpCorrect ? 'ok' : 'ng'}"><h2>${item.followUpCorrect ? '正解です' : '不正解です'}</h2><p>${escapeHtml(question.followUp.explanation)}</p></div>` : ''}
    </section>` : ''}
    ${canAdvance ? `<button class="primary next" id="next" type="button">${nextLabel}</button>` : ''}
  </main>`
  appRoot.querySelectorAll('[data-primary]').forEach((button) => button.addEventListener('click', () => update(answerPrimary(activeSession, button.dataset.primary))))
  appRoot.querySelectorAll('[data-follow]').forEach((button) => button.addEventListener('click', () => update(answerFollowUp(activeSession, button.dataset.follow))))
  document.getElementById('next')?.addEventListener('click', () => update(advance(activeSession)))
}

function render() {
  if (!appRoot) return
  if (!activeSession) return renderStart()
  if (activeSession.screen === 'result') return renderResult()
  renderQuiz()
}

window.QuizApp = { questions, shuffle, createSession, answerPrimary, answerFollowUp, advance, calculateResult, validateSavedSession }
render()
